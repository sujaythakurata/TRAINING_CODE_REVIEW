import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/services/user.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin:Subject<{login:boolean, username:string | null, uuid:string | null}> = new Subject();
  constructor(private route:Router, private notify:NotificationService, private user:UserService) { }

  //route auth guard 
  canActivate():Promise<boolean>{
    return new Promise((resolve, reject)=>{
      this.user.getUser()
      .subscribe({
        next:(data)=>{
          if(data){
            resolve(true)
          }else{
            this.notify.notification('error', "Invalid access", false,'middle');
            this.route.navigate(['']);
            resolve(false);
          }
        },
        error:(err)=>{
          this.notify.notification('error', "Invalid access", false,'middle');
          this.route.navigate(['']);
          resolve(false);
          console.error("here", err);
        }
      })
    });
  }

  authenticate(){
    this.user.getUser()
    .subscribe({
      next:(data)=>{
        let obj = {
          login:true,
          username:data.full_name,
          uuid:data.uuid
        }
        this.userLogin.next(obj);
      },
      error:(err)=>{
        let obj = {
          login:false,
          username:null,
          uuid:null
        };
        this.userLogin.next(obj);
      }
    });
  }
}
