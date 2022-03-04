import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private route:Router) { }

  login(data:{email:string,password:string}):Observable<any>{
    let url = `${environment.apiUrl}login`;
    return this.http.post(url, data, {headers:{"content-type":"application/json"}});
  }

  logout():void{
    localStorage.removeItem(environment.token);
  }

  setData(token:string):void{
      localStorage.setItem(environment.token, token);
  }
}
