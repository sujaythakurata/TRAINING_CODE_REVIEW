var username;
var login=false;
(function auth(){

  username = localStorage.getItem('name');
  login = localStorage.getItem('login');
  if(!login){
    notification("error", "Login to access this page", false, "middle")
    setTimeout(()=>location.href = "/html/login.html", 1500);
  }

})();