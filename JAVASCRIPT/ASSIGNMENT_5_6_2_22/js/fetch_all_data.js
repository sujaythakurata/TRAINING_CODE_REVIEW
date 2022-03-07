

function displayTable(data){
  let tag = ``;
  for(let i = 0; i<data.length; i++){
    tag += `
      <tr>
      <td>${i+1}</td>
      <td class="table-name">${data[i].name}</td>
      <td>${data[i].course}</td>
      <td>${data[i].registration_no}</td>
      <td>${data[i].mobile_no}</td>
      <td><button class="btn btn-success text-center"
      data-bs-target="#view-details" data-bs-toggle="modal" onclick="viewDetails(${data[i].id})"
      >
      <i class="fa fa-eye"></i></button></td>
      <td>
      <button class="btn btn-primary text-center" 
      data-bs-target="#update-student" data-bs-toggle="modal" onclick="setForm(${data[i].id})">
      <i class="fa fa-edit"></i></button></td>
      <td><button class="btn btn-danger text-center"
      onclick="deleteData(${data[i].id})"
      ><i class="fa fa-trash"></i></button></td>
      </tr>
    `;
  }
  $("#student-table-body").html(tag);
  $('#student-table').DataTable({
    'aoColumnDefs': [{
      'bSortable': false,
      'aTargets': [-1, -2, -3] 
    }]
  });
}

function success(data){
  displayTable(data);
}
function error(err){
  console.log(err);
}

function fetchList(){
  let url = " http://localhost:3000/students";
  call(url, 'GET', success, error);
}


function displayViewTable(data){
  let tag = `
    <tr>
      <td>Name</td>
      <td>${data.name}</td>
    </tr>
    <tr>
      <td>Age</td>
      <td>${data.age}</td>
    </tr>
    <tr>
      <td>Registration No.</td>
      <td>${data.registration_no}</td>
    </tr>
    <tr>
      <td>Roll</td>
      <td>${data.roll}</td>
    </tr>
    <tr>
      <td>Course</td>
      <td>${data.course}</td>
    </tr>
    <tr>
      <td>Mobile No.</td>
      <td>${data.mobile_no}</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>${data.address}</td>
    </tr>
  `;

  $("#view-table").html(tag);

}

function viewDetails(id){
  let url = " http://localhost:3000/students/"+id;
  call(url, 'GET', displayViewTable, error);
}