import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginClass:string = '';
  result:string = '';
  loginStyle:boolean = false;
  
  
  constructor(private loginService:LoginService, private router:Router, private notify:NotificationService, private auth:AuthService) { }

  ngOnInit(): void {
    this.loginStyle = false;
  }

  login(name:string, pwd:string):void{
    this.loginService.login({email:name,password:pwd})
    .subscribe(
      {
        next:result=>{
          if(result.status == 0){
            this.invalidLogin(result.msg);
          }
          if(result.status == 1){
            this.loginService.setData(result.token);
            //authenticate and show menu
            this.auth.authenticate();
            this.router.navigate(['']);
          }
        },
        error: (err:any)=>{this.notify.notification('error', err.message, true, 'top-end');}
      }
    );
  }

  invalidLogin(msg:string):void{
    this.loginClass = "alert-danger";
    this.loginStyle = true;
    this.result = msg;
  }


}
