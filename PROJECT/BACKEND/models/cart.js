exports.createModel = (sequielize, conn)=>{

  let table = conn.define('cart', 
    {
      id:{
        type:sequielize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      uuid:{
        type:sequielize.STRING,
        allowNull:false
      },
      order_id:{
        type:sequielize.INTEGER,
        allowNull:false
      },
      product_id:{
        type:sequielize.INTEGER,
        allowNull:false
      },
      quntity:{
        type:sequielize.INTEGER,
        defaultValue:0
      },
      price:{
        type:sequielize.DOUBLE,
        defaultValue:0
      }
    },
    {
      freezeTableName:true
    }
  );

  return table;

}