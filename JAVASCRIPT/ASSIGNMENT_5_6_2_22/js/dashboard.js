function setName(){
  $("#username").html(username);
}


window.onload = ()=>{
  setName();
}

$(document).ready(()=>{
  fetchList();
});


function successData(rsp){
  notification("success", "New Student Added Succesfully", true, "top-end");
  return false;
}

function errorData(err){
  console.log(err);
}


function addNewStudent(){
  let url = "http://localhost:3000/students"
  let payLoad = {
    "name":document.studentForm.name.value,
    "course":document.studentForm.course.value,
    "age":document.studentForm.age.value,
    "mobile_no":document.studentForm.mobile.value,
    "address":document.studentForm.address.value,
    "roll":Math.round(Math.random()*100000),
    "registration_no":Math.round(Math.random()*100000)
  }
  call(url, "POST", successData, errorData, payLoad);
  document.studentForm.reset();
  return false;
}



function setForm(id){
  let url = "http://localhost:3000/students/"+id;
  console.log(url);
  call(url, 'GET', setFormData, setFormError);
}

function setFormData(data){
  document.studentUpdateForm.name.value = data.name;
  document.studentUpdateForm.course.value = data.course;
  document.studentUpdateForm.mobile.value = data.mobile_no;
  document.studentUpdateForm.age.value = data.age;
  document.studentUpdateForm.address.value = data.address;
  document.studentUpdateForm.id.value = data.id;
  document.studentUpdateForm.registration.value = data.registration_no;
  document.studentUpdateForm.roll.value = data.roll;

}

function setFormError(err){
  console.log(err);
}

function updateStudentSuccess(rsp){
  console.log(rsp);
  notification("success", "Student Updated Successfully", true, "top-end");
}
function updateStudentError(err){
  console.log(err);
}
function updateStudent(){
  let url = "http://localhost:3000/students/"+document.studentUpdateForm.id.value;
  data = {
    "name":document.studentUpdateForm.name.value,
    "course":document.studentUpdateForm.course.value,
    "age":document.studentUpdateForm.age.value,
    "mobile_no":document.studentUpdateForm.mobile.value,
    "address":document.studentUpdateForm.address.value,
    "registration_no":document.studentUpdateForm.registration.value,
    "roll":document.studentUpdateForm.roll.value
  }
  call(url, 'PUT', updateStudentSuccess, updateStudentError, data);
  return false;
}


function deleteData(id){
  Swal.fire({
    title: 'Want To Delete This Student',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirm'
  }).then((result) => {
    if (result.isConfirmed) {
      let url = "http://localhost:3000/students/"+id;
      call(url, 'DELETE', removeStudent, error);
    }
  })
}

function removeStudent(rsp){
  notification("success", "Student Removed", true, "top-end");
}