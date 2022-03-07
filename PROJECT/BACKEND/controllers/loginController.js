
const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcryptjs');
const mail = require('./mailController');

const checkuser = (req, res, user)=>{
  return new Promise((resolve, reject)=>{
    user.findAll({
      where:{
        email:req.body.email
      },
      raw:true
    })
    .then((data)=>{
      if(data.length >0)
        resolve([false, data]);
      else
        resolve([true, data]);
    })
    .catch((err)=>{
      throw new Error(err);
    })
  });
}

const addUser = (req,user)=>{
  return new Promise(async (resolve, reject)=>{
    let hashedPwd = await bcrypt.hash(req.body.password, 10);
    let data = {
      full_name:req.body.name,
      email:req.body.email,
      password:hashedPwd,
      mobile:req.body.mobile
    }
    user.create(data)
    .then((data)=>{
      mail.sendRegisterMail(data);
      resolve(data);
    })
    .catch((err)=>{
      throw new Error(err);
    });
    
  })
}

const createJwt =(name, uuid)=>{
  let payload = {
    uuid:uuid,
    name:name
  }
  let token = jwt.sign(payload, config.jwt.token, {expiresIn:"2 days"});
  return token;

}

exports.routes = (app,user, login)=>{
  app.post('/api/register', 
  (req, res)=>{
    checkuser(req, res, user)
    .then((existsUser)=>{
      if(existsUser[0]){
        return addUser(req, user);
      }else{
        res.status(200).json({"status":0, "msg":"email already exists"});
        throw new Error("same user exists");
      }
    }
    )
    .then((data)=>{
      let token = createJwt(data.dataValues.full_name, data.dataValues.uuid);
      res.status(201).json({"status":1, "msg":"user created", "token":token});
    })
    .catch((err)=>{
      console.error(err);
    })

  });

  app.post('/api/login', (req, res)=>{
    checkuser(req, res, user)
    .then(async(existsUser)=>{
      if(!existsUser[0] && (await bcrypt.compare(req.body.password, existsUser[1][0].password)))
        return createJwt(existsUser[1][0].full_name, existsUser[1][0].uuid)
      else{
        res.status(200).json({"status":0, "msg":"username or passwrod is invalid"});
        throw new Error("invalid login");
      }
    })
    .then((token)=>{
      res.status(200).json({"status":1, "msg":"login successfull", "token":token});
    })
    .catch((err)=>{
      console.error(err);
    })



  })

}