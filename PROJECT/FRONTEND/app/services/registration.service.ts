import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classes/User';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient, private login:LoginService) { }

  //register the user
  register(data:User):Promise<any>{
    return new Promise((resolve, reject)=>{
      let url = `${environment.apiUrl}${environment.regExt}`;
      let payload = {
        name:data.name,
        email:data.email,
        password:data.password,
        mobile:data.mobile
      }
      this.http.post(url, JSON.stringify(payload), {headers:{"content-type":"application/json"}})
      .subscribe({
        next:(rsp:any)=>{
          if(rsp.status == 1)
            this.login.setData(rsp.token);
          resolve(rsp);
        },
        error:(err)=>{
          reject(err);
        }
      })
    });
    
  }



}
