const axios  = require('axios').default;
const sequelize = require('sequelize');

exports.routes = (app, product)=>{

  app.get('/api/products', (req, res)=>{
    product.findAll({
      limit:req.query.limit==undefined?100:Number(req.query.limit)
    })
    .then((data)=>{
      res.json(data);
    })
    .catch((err)=>{
      console.error(err);
      res.status(500).json({msg:'internal error'});
    })
  })

  app.get('/api/products/category/:category', (req, res)=>{
    product.findAll({
      where:{
        category:{
          [sequelize.Op.eq] : `${req.params.category}`
        },
      },
      limit:req.query.limit==undefined?100:req.query.limit
    })
    .then((data)=>{
      res.json(data);
    })
    .catch((err)=>{
      console.error(err);
      res.status(500).json({msg:'internal error'});
    })


  })

  app.get('/api/product/fill', (req, res)=>{
    axios.get("https://fakestoreapi.com/products")
    .then((data)=>{
      for(let productObj of data.data){
        productObj.rating = productObj.rating.rate;
        product.create(productObj);
      }
      res.json({msg:"products fill done"});
    })
    .catch((err)=>{
      console.error(err);
      res.json({msg:"internal error"});
    })
  })


}