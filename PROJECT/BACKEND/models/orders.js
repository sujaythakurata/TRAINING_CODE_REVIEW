exports.createModel = (sequielize, conn)=>{

  let table = conn.define('orders', 
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
      order_status:{
        type: sequielize.STRING,
        allowNull:false,
        default:"order placed"
      },
      total_amount:{
        type:sequielize.DOUBLE,
      }
    },
    {
      freezeTableName:true
    }
  );

  return table;

}