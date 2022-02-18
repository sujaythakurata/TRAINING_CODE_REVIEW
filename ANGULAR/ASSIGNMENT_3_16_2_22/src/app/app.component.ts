import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ASSIGNMENT_3_16_2_22';
  tempName!:string;
  tempEmail!:string;
  tempAge!:string;
  tempPwd!:string;
  tempSubmit(){
    alert(`
    Name: ${this.tempName} 
    Age: ${this.tempAge} 
    Email: ${this.tempEmail} 
    Pwd: ${this.tempPwd}`);
  }


  reForm = new FormGroup(
    {
      reName: new FormControl(),
      reEmail: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        this.emailValidator(/(.com)$/i)
      ]),
      reAge: new FormControl(),
      rePwd: new FormControl('', [Validators.required]),
      reConfirmPwd: new FormControl('', [
        Validators.required,
        this.pwdValidator()
      ])
    }
  );

  emailValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      console.log(forbidden);
      return forbidden ? null:{emailValidate: {value: control.value}};
    };
  }

  pwdValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let forbidden = false;
      if(this.reForm?.controls['rePwd'].value === control.value)
        forbidden = true;
      console.log("confirm", forbidden);
      return forbidden ? null:{pwdValidate: {value: control.value}};
    };
  }

  reSubmit(){
    alert(`
    Name: ${this.reForm.controls['reName'].value} 
    Age: ${this.reForm.controls['reAge'].value} 
    Email: ${this.reForm.controls['reEmail'].value} 
    Pwd: ${this.reForm.controls['rePwd'].value}`);
  }


  add(n1:number, n2:number):number{
    return n1+n2;
  }

  login(name:string, pwd:string):boolean{
    if(name == "admin" && pwd == "admin")
      return true;
    else
      return false;
  }

  factorial(n1:number):number{
    let fac = 1;
    for(let i = 1; i<=n1; i++)
      fac *=i;
    return fac 

  }


}
