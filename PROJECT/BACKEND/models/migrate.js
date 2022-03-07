const config = require('../config');
function success(table){
  console.log(`${table} is created`);
}

function error(table,err){
  console.log(`${table} is not created `, err);
}

exports.migrate = (user, login, order, cart, payment, products)=>{
  let syncType = config.db.syncType
  user.sync(syncType).then(()=>success('user')).catch((e)=>error('user', e));
  login.sync(syncType).then(()=>success('login')).catch((e)=>error('login', e));
  order.sync(syncType).then(()=>success('order')).catch((e)=>error('order', e));
  cart.sync(syncType).then(()=>success('cart')).catch((e)=>error('cart', e));
  payment.sync(syncType).then(()=>success('payment')).catch((e)=>error('payment', e));
  products.sync(syncType).then(()=>success('products')).catch((e)=>error('payment', e));
}