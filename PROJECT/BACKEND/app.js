///requried dependencies
const sequelize = require('sequelize');
const express = require('express');
const cors = require('cors');
const config = require('./config');
const database = require('./datatbase/database');
const dbRelation = require('./datatbase/relation');
const migrate = require('./models/migrate');
const user = require('./models/users');
const login = require('./models/login');
const order = require('./models/orders');
const cart = require('./models/cart');
const payment = require('./models/payment');
const products = require('./models/product');
const app = new express();
const loginController = require("./controllers/loginController");
const orderController = require("./controllers/orderController");
const userController = require("./controllers/userController");
const productController = require('./controllers/productController')


///middlwares
const auth = require('./middlewares/auth');


///global variables
let dbConnection;
let userModel;
let loginModel;
let orderModel;
let cartModel;
let paymentModel;
let productModel;



//run server
app.listen(config.port, ()=>{
  console.info(`Server running on ${config.hostUrl}:${config.port}`);
});


//connect databse
database.connectDatabase(sequelize, config.db)
.then(async (conn)=>{
  dbConnection = conn;
  userModel = user.createModel(sequelize, dbConnection);
  loginModel = login.createModel(sequelize, dbConnection);
  orderModel = order.createModel(sequelize, dbConnection);
  cartModel = cart.createModel(sequelize, dbConnection);
  paymentModel = payment.createModel(sequelize, dbConnection);
  productModel = products.createModel(sequelize, dbConnection);
  if(config.db.migrate){
    await dbRelation.createRelation(userModel, loginModel, orderModel, cartModel,paymentModel, productModel);
    await migrate.migrate(userModel, loginModel, orderModel, cartModel, paymentModel, productModel);
  }

  //apis routing
  loadRoutes();
})
.catch((err)=>{
  console.error(err);
});


function loadRoutes(){
  loginController.routes(app, userModel, loginModel);
  orderController.routes(app, cartModel, orderModel, userModel, dbConnection);
  userController.routes(app, userModel);
  productController.routes(app, productModel);
}


//user create delete update
app.use(cors());
app.use(express.json());
