import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup(
    {
      name: new FormControl(),
      email: new FormControl('',[this.emailValidator(/(.com)$/i)]),
      password: new FormControl(),
      confirmPwd: new FormControl('', [this.pwdValidator()]),
      mobile: new FormControl()
    }
  )

  constructor(private register:RegistrationService, private router:Router, private notify:NotificationService, private auth:AuthService) { }

  ngOnInit(): void {
  }

  addUser():void{
    let data:User = this.registerForm.value;
    this.register.register(data)
    .then(
      (rsp)=>{
        let icon = 'success'
        if(rsp.status == 0)
          icon = "warning";
        this.notify.notification(icon, rsp.msg, true, 'top-end');
        if(rsp.status == 1){
          this.auth.authenticate();
          setTimeout(()=>this.router.navigate(['']), 1600);
        }
      },
      (err)=>{
        throw new Error(err);
      }
    )
    .catch((err)=>{
      console.error(err);
      this.notify.notification('error', "Internal Server Error", true, 'top-end');
    })
    
  }

  emailValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null:{emailValidate: {value: control.value}};
    };
  }

  pwdValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let forbidden = false;
      if(this.registerForm?.controls['password'].value === control.value)
        forbidden = true;
      return forbidden ? null:{pwdValidate: {value: control.value}};
    };
  }



}
