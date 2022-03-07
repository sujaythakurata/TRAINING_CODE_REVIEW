import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/Users';
import { CurdServiceService } from 'src/app/services/curd_service/curd-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  result:string = '';
  loginClass:string = '';
  loginStyle:boolean = false;
  nameClass:string = "";
  pwdClass:string = "";
  emailClass:string = "";
  mobileClass:string = "";

  constructor(private curd:CurdServiceService) { }

  ngOnInit(): void {
    this.loginStyle = false;
  }

  register(name:any, pwd:any, email:any, mobile:any){
    let data:User = {"name":name.value,"pwd":pwd.value,"email":email.value,"mobile":mobile.value, "edit":false};
    if(this.validateInput(name.value, pwd.value, email.value, mobile.value)){
      this.curd.add(environment.user,data).
      subscribe(
        {
          next:(data)=>{
            name.value = '';
            pwd.value = '';
            email.value = '';
            mobile.value = '';
            this.emptyValidate();
            alert("New User Added Successfully");
          },
          error:(err)=>{alert(err.message);}
        }
      );
    }
  }

  validateInput(name:string, pwd:string, email:string, mobile:string):boolean{
    let flag = true;
    if(name.length<5){
      this.nameClass = "is-invalid";
      flag = false;
    }
    else
      this.nameClass = "is-valid";
    if(pwd.length<8){
      this.pwdClass = "is-invalid";
      flag = false;
    }
    else
      this.pwdClass = "is-valid";
    if(email.length<10){
      this.emailClass = "is-invalid";
      flag = false;
    }
    else
      this.emailClass = "is-valid";
    if(mobile.length != 10){
      flag = false;
      this.mobileClass = "is-invalid";
    }
    else
      this.mobileClass = "is-valid";

    return flag;
  }

  emptyValidate():void{
    this.nameClass = '';
    this.emailClass = '';
    this.mobileClass = '';
    this.pwdClass = '';
  }



}
