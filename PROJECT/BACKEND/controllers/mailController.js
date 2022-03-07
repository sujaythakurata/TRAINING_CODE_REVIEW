const nodemailer = require("nodemailer");
const config = require("../config");


let transpoter = nodemailer.createTransport(config.mail);

const getMsg = (opt, data, orderData, cartData)=>{
  if(opt == "order"){
    let template = {
      subject: "Congratulation Your Order Placed",
      msg:`
        <h4>Hi, ${data.full_name}</h4>
        <p>Your Order Is placed Order Id: <span style="color:#08c3c9; font-weight:bold"> sku-${orderData.id}</span>. 
        Your Order Total Amount <span style="color:#08c3c9; font-weight:bold">${orderData.total_amount}</span>.
        </p>
        <p>
          <a href="http://localhost:4200/profile/order" <span style="color:#08c3c9; font-weight:bold; text-decoration:none;">Click Here For track Order</a>
        </p>
        <p>
          Thank You from Shopping Here.
          <br>
          <h4>Stay Safe Stay Healthy<h4>
        </p>
      `
    }
    return template;
  }
}

const sendMail = async(opt, userData, orderData, cartData)=>{
  let msg = getMsg(opt, userData, orderData, cartData);
  let info = await transpoter.sendMail(
    {
      from: "Buyit@no-reply.com", // sender address
      to: userData.email,
      subject: msg.subject,
      html: msg.msg,
    }
   );
   return info;
}

const registerMail = async(user)=>{
  let subject = "Congratualtion Your account is created";
  let msg = `<h4>Hi ${user.full_name},</h4>
  <p> Thank You to choose Us. Enjoy shopping!</p>
  <p>
    <h4>Stay Safe Stay Healthy<h4>
  </p>
  `
  let info = await transpoter.sendMail(
    {
      from: "Buyit@no-reply.com", // sender address
      to: user.email,
      subject: subject,
      html: msg,
    }
   );

  return info;
}

exports.sendOrderMail = (option, user, uuid, orderData, cartata)=>{
  user.findOne({where:{uuid:uuid}})
  .then(async (data)=>{
    let info = await sendMail(option, data, orderData, cartata);
    console.info(info);
  })
  .catch((err)=>{
    console.error(err);
  })
}

exports.sendRegisterMail = async (user)=>{
  let info = await registerMail(user);
  console.info(info);
}

exports.sendOrderStatus = async(name, email, status, id)=>{
  let msg = '';
  let subject = '';
  if(status == 1){
    subject = "Order Shipped"
    msg = `<h4>Hi ${name},</h4>
    <p> Thank You to choose Us. Enjoy shopping!</p>
    <p>Order Id: <span style="color:#08c3c9; font-weight:bold">sku-${id}</span> is shipped  and will
    be deliver sortly.
    </p>
    <p>
      <h4>Stay Safe Stay Healthy<h4>
    </p>`;
  }else{
    subject = "Order delivered"
    msg = `<h4>Hi ${name},</h4>
    <p> Thank You to choose Us. Enjoy shopping!</p>
    <p>Order Id: <span style="color:#08c3c9; font-weight:bold">sku-${id}</span> is delivered and <span style="color:#000; font-weight:bold">Received by you.</span>
    </p>
    <p>
      <h4>Stay Safe Stay Healthy<h4>
    </p>`;
  }


  let info = await transpoter.sendMail(
    {
      from: "Buyit@no-reply.com", // sender address
      to: email,
      subject: subject,
      html: msg,
    }
   );
  console.info(info);
}