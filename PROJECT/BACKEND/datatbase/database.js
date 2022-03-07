exports.connectDatabase = (sequelize, config)=>{
  return new Promise((resolve, reject)=>{
    let opt = {
      host:config.host,
      dialect:config.dialect,
      pool:{
        min:config.min,
        max:config.max,
        acquire:config.acquire,
        idle:config.idle
      }
    }
    const conn = new sequelize(config.db, config.user, config.pwd,opt);
    conn.authenticate()
    .then(()=>{
      console.info("Database Connected Properly");
      resolve(conn);
    })
    .catch((err)=>{
      throw new Error(err);
    })
  });
}