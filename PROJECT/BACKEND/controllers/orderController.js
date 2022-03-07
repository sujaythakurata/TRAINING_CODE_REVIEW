const auth = require('../middlewares/auth');
const sequelize = require('sequelize');
const mail = require('./mailController');
const config = require('../config');
const axios = require('axios');

const addCart = (req, cart)=>{
  return new Promise((resolve, reject)=>{
    cart.findAll({
      where:{
        uuid:req.uuid,
        product_id:req.body.product_id,
        order_id:req.body.order_id
      }
    })
    .then((data)=>{
      if(data.length>0){
        cart.update({quntity:req.body.quntity, price:req.body.price},
          {
            where:{
              uuid:req.uuid,
              product_id:req.body.product_id,
              order_id:req.body.order_id
            }
          }
          )
        .then((data)=>{
          resolve(data);
        })
        .catch((err)=>{
          throw new Error(err);
        })
      }else{
        cart.create({
          uuid:req.uuid,
          product_id:req.body.product_id,
          order_id:req.body.order_id,
          quntity:req.body.quntity,
          price:req.body.price
        })
        .then((data)=>{
          resolve(data);
        })
        .catch((err)=>{
          throw new Error(err);
        })
      }
    })
  })
}

const addOrder = (req, order, cart, user)=>{
  return new Promise((resolve, reject)=>{
    order.create({
      uuid:req.uuid,
      order_status:req.body.order_status,
      total_amount:req.body.total_amount
    })
    .then((data)=>{
      let orderData = data;
      cart.update({order_id:data.id}, {
        where:{
          uuid:req.uuid,
          quntity:{
            [sequelize.Op.gt]:0
          },
          order_id:-1
        }
      })
      .then((data)=>{
        mail.sendOrderMail('order', user, req.uuid, orderData, data);

        user.findOne({where:{uuid:req.uuid}})
        .then((userObj)=>{
          //make the payment
            let paymentData = {
              "customer_details": {
                "customer_id":`${userObj.id}`,
                "customer_email": `${userObj.email}`,
                "customer_phone":`${userObj.mobile}`
              },
              "order_id": `sku-${orderData.id}`,
              "order_amount": orderData.total_amount,
              "order_currency": "INR",
              "order_meta":{
                  "return_url":config.paymentReturnUrl
              }
            }
            axios.post(
              config.paymentUrl,
              paymentData,
              {headers:config.paymentsHeader}
            )
            .then((payment)=>{
              console.log(payment);
              data.push({payment_link:payment.data.payment_link});
              resolve(data);
            })
            .catch((err)=>{throw new Error(err);});
        })
        .catch((err)=>{
          throw new Error(err);
        })

      })
      .catch((err)=>{
        throw new Error(err);
      })
    })
    .catch((err)=>{
      throw new Error(err);
    })
  })
}

const getProductInfo = (req, order, cart)=>{
  return new Promise((resolve, reject)=>{
    let where = {
      uuid:req.uuid,
      order_id:req.query.order_id,
      quntity:{
        [sequelize.Op.gt]:0
      }
    };
    if(req.query.product_id != undefined)
    where.product_id = req.query.product_id;
    cart.findAll({
      where:where
    })
    .then(data=>{
      resolve(data);
    })
    .catch((err)=>{
      reject(err);
    })
  })
}

const getOrders = (req, cart, order, conn)=>{
  return new Promise((resolve, reject)=>{
    conn.query(" SELECT `orders`.`id`, `orders`.`uuid`, `orders`.`order_status`, `orders`.`total_amount`, `orders`.`createdAt`, `orders`.`updatedAt`, `orders`.`userId`, `carts`.`id` AS `carts.id`, `carts`.`uuid` AS `carts.uuid`, `carts`.`order_id` AS `carts.order_id`, `carts`.`product_id` AS `carts.product_id`, `carts`.`quntity` AS `carts.quntity`, `carts`.`price` AS `carts.price`, `carts`.`createdAt` AS `carts.createdAt`, `carts`.`updatedAt` AS `carts.updatedAt`, `carts`.`userId` AS `carts.userId` FROM `orders` AS `orders` left  JOIN `cart` AS `carts` ON `orders`.`id` = `carts`.`order_id` WHERE `orders`.`uuid` = "+`'${req.uuid}' order by `+" `orders`.`createdAt` desc")
    .then(async(data)=>{
      console.log(data);
      let cart=[];
      let response = [];
      let orderInfo;
      if(data[0]?.length>0){
        let prev = data[0][0].id;
        for(let i = 0; i<data[0].length; i++){
          if(prev != data[0][i].id){
            response.push(orderInfo);
            cart = new Array();
            prev = data[0][i].id
          }
          orderInfo = data[0][i];
          cart.push({product_id:data[0][i]['carts.product_id'], quntity:data[0][i]['carts.quntity'], price:data[0][i]['carts.price']})
          orderInfo.carts = cart;
          if(i == data[0].length - 1){
            response.push(orderInfo);
            cart = new Array();
            prev = data[0][i].id
          }
        }
      }
      resolve(response);
    })
    .catch((err)=>{
      throw new Error(err);
    })
  })
}

const getAllOrders = (req, order, user)=>{
  return new Promise((resolve, reject)=>{
    order.findAll()
  .then((data)=>{
    resolve(data)
  })
  .catch((err)=>{
    throw new Error(err);
  })
  })
}

const updateOrderStatus = (req, order, user)=>{
  return new Promise((resolve, reject)=>{
    order.update(
      {
        order_status:req.body.order_status
      },
      {
      where:{
        id:req.body.order_id
      }
    })
    .then((data)=>{
      user.findOne({where:{uuid:req.uuid}})
      .then((userData)=>{
        mail.sendOrderStatus(userData.full_name, userData.email, req.body.order_status, req.body.order_id);
        resolve(true);
      })
      .catch((err)=>{
        throw new Error(err);
      })
    })
    .catch((err)=>{
      throw new Error(err);
    })
  })
}

exports.routes = (app, cart, order, user, conn)=>{
  app.post('/api/cart', auth.auth, (req, res)=>{
    console.log(req.body);
    addCart(req, cart)
    .then((data)=>{
      res.status(201).json({status:0, data:data, msg:'product added to cart successfully'});
    })
    .catch((err)=>{
      console.error(err);
      res.status(500).json({msg:'error during product add'});
    })
  });

  app.post('/api/order', auth.auth, (req, res)=>{
    addOrder(req, order, cart, user)
    .then((data)=>{
      res.status(201).json({status:0, data:data, msg:'order created successfully'});
    })
    .catch((err)=>{
      console.log(err);
      res.status(500).json({msg:'error during add order'});
    });
  });

  app.get('/api/cart/productinfo', auth.auth, (req, res)=>{
    getProductInfo(req, order, cart)
    .then(
      data=>{
        res.json(data);
      },
      err=>{
        throw new Error(err);
      }
    )
    .catch((err)=>{
      res.status(500).json(err);
      console.error(err);
    })
  })

  app.get('/api/order/info', auth.auth, (req, res)=>{
    getOrders(req, cart, order, conn)
    .then(
      data=>{
        res.json(data);
      }
    )
    .catch((err)=>{
      res.status(500).json({msg:'internal error'});
      console.error(err);
    })
  });

  app.get('/api/order/all', auth.auth, (req, res)=>{
    getAllOrders(req, order, user)
    .then((data)=>{
      res.json(data);
    })
    .catch((err)=>{
      console.error(err);
    })
  })

  // app.post('/api/order/status', auth.auth, (req, res)=>{
  //   updateOrderStatus()
  //   .then(())
  // })

  app.post('/api/order/update', auth.auth, (req, res)=>{
    updateOrderStatus(req, order, user)
    .then((data)=>{
      res.json({msg:"Order Status Updated Properly"});
    })
    .catch((err)=>{
      res.status(500).json({msg:"Order status not able to update"});
      console.error(err);
    })
  })


}