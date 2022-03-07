exports.createModel = (sequielize, conn)=>{

  let table = conn.define('payment', 
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
      status:{
        type:sequielize.STRING,
        allowNull:false,
        default:'not done'
      }
    },
    {
      freezeTableName:true
    }
  );

  return table;

}