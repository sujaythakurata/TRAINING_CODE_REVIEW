let userName;
let password;
function success(rsp){
  if(rsp.length>0 && rsp[0].password === password){
    localStorage.setItem("name", rsp[0].name);
    localStorage.setItem("login", true);
    notification("success", "Login SuccessFully", true, "top-end");
    setTimeout(()=>location.href = "/html/dashboard.html", 1300);
  }else{
    showAlert();
  }
}

function error(){
  notification("error", "Try again after some time", true, "top-end");
}

function login(){
  userName = document.loginForm.name.value;
  password = document.loginForm.password.value;
  document.loginForm.reset();
  let url = `http://localhost:3000/admins?user_name=${userName}`;
  call(url, 'GET', success, error);
  return false;

}

function hideAlert(){
  $(".login-alert").hide();
}

function showAlert(){
  $(".login-alert").show();
}
