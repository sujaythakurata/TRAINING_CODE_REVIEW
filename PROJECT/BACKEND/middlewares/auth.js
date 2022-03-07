const jwt = require('jsonwebtoken');
const config = require('../config');


exports.auth = (req, res, next)=>{
  let token = req.header(config.jwt.header);
  jwt.verify(token, config.jwt.token, (err, data)=>{
    if(err)
      return res.status(403).json({msg:"unauthorized access"});
    else{
      req.uuid = data.uuid;
      next();
    }
  })

}
