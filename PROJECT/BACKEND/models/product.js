exports.createModel = (sequielize, conn)=>{

  let table = conn.define('products', 
    {
      id:{
        type:sequielize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      title:{
        type:sequielize.STRING,
        allowNull:false
      },
      price:{
        type:sequielize.DOUBLE,
        allowNull:false
      },
      description:{
        type:sequielize.TEXT,
        allowNull:false
      },
      category:{
        type:sequielize.STRING,
        allowNull:false
      },
      image:{
        type:sequielize.STRING,
        allowNull:false
      },
      rating:{
        type:sequielize.DOUBLE,
        allowNull:false
      }
    },
    {
      freezeTableName:true
    }
  );

  return table;

}