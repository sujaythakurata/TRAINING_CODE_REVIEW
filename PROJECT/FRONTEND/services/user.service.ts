import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser():Observable<any>{
    let token = localStorage.getItem(environment.token);
    let token_header = environment.token_header;
    let headers:any = {}
    headers[token_header] = token;
    return this.http.get(environment.apiUrl+'user', {headers:headers, responseType:'json'});
  }

  updateUser(data:any):Observable<any>{
    let token = localStorage.getItem(environment.token);
    let token_header = environment.token_header;
    let headers:any = {}
    headers[token_header] = token;
    return this.http.post(environment.apiUrl+'user', data, {headers:headers, responseType:'json'});
  }


}
