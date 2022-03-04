exports.createRelation = (user, login, order, cart, payment)=>{
  
  ///user table relation
  user.hasMany(login, {targetKey:'uuid'});
  user.hasMany(order, {targetKey:'uuid'});
  user.hasMany(cart, {targetKey:'uuid'});
  user.hasMany(payment,{targetKey:'uuid'});

  //login table relation
  login.belongsTo(user, {sourceKey:'uuid', targetKey:'uuid'});


  //order table relation
  order.hasOne(user, {targetKey:'uuid'});
  order.hasMany(cart, {targetKey:'order_id'});
  order.hasOne(payment,{targetKey:'order_id'})

  //cart table relation
  cart.belongsTo(order, {sourceKey:'order_id'})
  cart.belongsTo(user, {targetKey:'uuid', sourceKey:'uuid'})

  //payment table relation
  payment.belongsTo(order, {targetKey:'id', sourceKey:'order_id'});
  payment.belongsTo(user, {targetKey:'uuid', sourceKey:'uuid'});

}