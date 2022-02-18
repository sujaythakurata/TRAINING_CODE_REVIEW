import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  canActivate(){
    if(localStorage.getItem(environment.login) == 'true')
      return true;
    else{
      alert("Your not allowed to view this page");
      this.route.navigate(['']);
      return false;
    }
  }


}
