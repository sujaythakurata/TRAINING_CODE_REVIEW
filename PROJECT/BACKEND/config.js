module.exports = config = {
  db:{
    host:'localhost',
    db:'ECOMMERCE',
    user:'root',
    pwd:'Sujay@1234',
    dialect:'mysql',
    pool:{
      min:0,
      max:5,
      acquire:30000,
      idle:10000
    },
    syncType:{},
    migrate:false
  },
  port:8100,
  hostUrl:"http://localhost",
  jwt:{
    token:"09f26e402586e2faa8da4c98a35f1b20d6b033c6097",
    header:"jwt_token_header"
  },
  testmail:{
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "21809ec447d922",
      pass: "3749160d646a19"
    }
  },
  mail:{
    host: "smtp.gmail.com", 
    port:465,
    secureConnection: true,
    service: 'Gmail',
    auth:{
      user:'sujoythakurata16@gmail.com',
      pass:'sujay thakurata'
    },
    tls: {
      ciphers:'SSLv3'
  }
  },
  paymentsHeader:{
    "content-type":"application/json",
    "x-client-id":"1393111135bcb5f719e8637ae3113931",
    "x-client-secret":"aadfd83b55578a81db4eabe475970eefe8fec00f",
    "x-api-version":"2022-01-01",
    "access-control-allow-origin":'*',
    "accept-encoding":"gzip, deflate, br",
    "access-control-request-method":"POST"
  },
  paymentReturnUrl:"http://localhost:4200/cart?order_id={order_id}&order_token={order_token}",
  paymentUrl:"https://sandbox.cashfree.com/pg/orders"



}