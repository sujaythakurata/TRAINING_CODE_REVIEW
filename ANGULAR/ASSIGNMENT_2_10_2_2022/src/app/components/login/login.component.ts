import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/Users';
import { LoginService } from 'src/app/services/login_service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginClass:string = '';
  result:string = '';
  loginStyle:boolean = false;
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.loginStyle = false;
  }

  login(name:string, pwd:string):void{
    this.loginService.login({email:name,pwd:pwd})
    .subscribe(
      {
        next:result=>{this.validateData(result);},
        error: (err:any)=>{alert(err.message)}
      }
    );
  }

  validateData(result:User[]){
    if(result.length>0){
      this.loginClass = "alert-success";
      this.loginStyle = true;
      this.result = `Login SuccessFull Welcome ${result[0].name} after 2 sec it will redirect`;
      setTimeout(()=>this.router.navigate(['employee']), 2000);
      localStorage.setItem(environment.login, "true");
      localStorage.setItem(environment.userName, result[0].name);
    }else{
      this.loginClass = "alert-danger";
      this.loginStyle = true;
      this.result = "Login Unsuccessfull";
      localStorage.setItem(environment.login, "false");
    }
  }
    // let result = this.userList.filter((data)=>{
    //   if((data.name === name && data.pwd == pwd) || (name =="admin" && pwd =="1234"))
    //     return data;
    // });
    // if(result.length>0){
    //   this.loginClass = "alert-success";
    //   this.loginStyle = "display:block";
    //   this.result = `Login SuccessFull Welcome ${result[0].name} after 2 sec it will redirect`;
    //   this.dupUserList = result;
    //   setTimeout(()=>this.displayBlock(4), 2000);
    // }else{
    //   this.loginClass = "alert-danger";
    //   this.loginStyle = "display:block";
    //   this.result = "Login Unsuccessfull"
    // }
  

}
