const auth = require('../middlewares/auth');

const updateUser = (req, user)=>{
  return new Promise((resolve, reject)=>{
    user.update(
      {
        full_name:req.body.full_name,
        address:req.body.address,
        dob:req.body.dob,
        mobile:req.body.mobile
      },
      {
        where:{
          uuid:req.uuid
        }
      }
    )
    .then((data)=>{
      resolve(data);
    })
    .catch(err=>{
      reject(err);
    })
  });
}


exports.routes = (app, user)=>{
  app.post('/api/user', auth.auth, (req, res)=>{
    updateUser(req, user)
    .then(
      (data)=>{
        res.status(201).json({status:0, msg:'user updated successfully'});
      },
      (err)=>{
        throw new Error(err)
      }
    )
    .catch((err)=>{
      console.error(err);
      res.status(500).json({msg:'error during user update'});
    })
  });

  app.get('/api/user', auth.auth, (req, res)=>{
    user.findOne({where:{uuid:req.uuid}})
    .then((data)=>{
      res.status(200).json(data);
    })
    .catch((err)=>{
      console.log(err);
      res.status(500).json({msg:'error during fetch data'});
    });
  });

}