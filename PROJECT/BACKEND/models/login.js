exports.createModel = (sequielize, conn)=>{

  let table = conn.define('login', 
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
      logged_in:{
        type: sequielize.DATE,
        allowNull:false,
        default:sequielize.NOW
      },
      logged_out:{
        type: sequielize.DATE,
        allowNull:false
      }
    },
    {
      freezeTableName:true
    }
  );

  return table;

}