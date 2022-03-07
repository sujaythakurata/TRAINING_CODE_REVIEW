function notification(icon, title, toast, position, timer=1500){
  Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: timer,
    toast:toast,
    position:position
  });
}