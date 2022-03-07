function logout(){
  localStorage.removeItem('name');
  localStorage.removeItem('login');
  notification("success", "Logout Successfully", false, "middle");
  setTimeout(()=>location.href = "/html/login.html", 1500);
}