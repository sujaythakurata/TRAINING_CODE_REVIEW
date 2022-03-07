import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/classes/Users';
import { CurdServiceService } from 'src/app/services/curd_service/curd-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  editName!:string;
  editEmail!:string;
  editMobile!:string;
  editPwd!:string;
  userList:User[] = new Array();
  dtOptions = {};
  dtTrigger:Subject<any> = new Subject<any>();
  constructor(private curd:CurdServiceService) { }

  ngOnInit(): void {
    this.getUsers();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      columnDefs: [
        { orderable: false, targets: [-1,-2] },
        //{ orderable: false, targets: 2 }
     ]
      
    };
  }

  //fetch user data
  getUsers(){
    this.curd.fetch(environment.user)
    .subscribe((data)=>{
      this.userList = data;
      this.dtTrigger.next(data);
    })
  }

  //remove user
  removeUser(id:number):void{
    let url = `${environment.user}/${id+1}`;
    this.curd.delete(url)
    .subscribe(
      {
        next:(obj)=>{
          alert(`Name: ${obj.name} Email: ${obj.email} Is Removed`);
          this.getUsers();
        },
        error:(err)=>alert(err.message)
      }
    );
  }

  //set form for previous data
  editUser(index:number):void{
    this.editName = this.userList[index].name;
    this.editEmail = this.userList[index].email;
    this.editMobile = this.userList[index].mobile;
    this.editPwd = this.userList[index].pwd;
    this.userList[index].edit = true;

  }

  //confirm edit user
  confirmEdit(index:number):void{
    this.userList[index].edit = false;
    let url = `${environment.user}/${index+1}`;
    this.curd.update(url, this.userList[index])
    .subscribe(
      {
        next:(data)=>{
          console.log(data);
          alert('User Updated SuccessFully');
        },
        error:(err)=>{alert(err.message)}

      }
    );
  }

  //cancel edit user
  cancelEdit(index:number){
    this.userList[index].name = this.editName;
    this.userList[index].email = this.editEmail;
    this.userList[index].pwd = this.editPwd;
    this.userList[index].mobile = this.editMobile;
    this.userList[index].edit = false;
    //this.getUsers();
    // this.userList.filter((data, i)=>{
    //   if(i == index){
    //     data.name = this.editName;
    //     data.email = this.editEmail;
    //     data.mobile = this.editMobile;
    //     data.pwd = this.editPwd;
    //     data.edit = false;
    //   }
    // });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
