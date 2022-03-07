exports.createModel = (sequielize, conn)=>{

  let model = conn.define('users', 
    {
      id:{
        type:sequielize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      uuid:{
        type:sequielize.UUID,
        primaryKey:true,
        defaultValue:sequielize.UUIDV4
      },
      full_name:{
        type: sequielize.STRING,
        allowNull:false
      },
      email:{
        type: sequielize.STRING,
        allowNull:false
      },
      password:{
        type: sequielize.TEXT,
        allowNull:false
      },
      address:{
        type: sequielize.STRING,
        allowNull:true
      },
      dob:{
        type: sequielize.DATEONLY,
        allowNull:true
      },
      mobile:{
        type:sequielize.STRING,
        allowNull:true
      }

    },
    {
      freezeTableName:true
    }
  );
  return model;

}