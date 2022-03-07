import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName!:String | null;
  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.setItem(environment.login, 'false');
  }
  loggedin():boolean{
    if(localStorage.getItem(environment.login) == 'true'){
      this.userName = localStorage.getItem(environment.userName);
      return true;
    }
    else
    return false;
  }

}
