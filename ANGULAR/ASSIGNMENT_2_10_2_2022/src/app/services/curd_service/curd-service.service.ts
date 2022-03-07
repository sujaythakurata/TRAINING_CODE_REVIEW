import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurdServiceService {

  apiUrl:string = environment.apiUrl;
  constructor(private http:HttpClient) { }
  
  add(url:string,data:any):Observable<any>{
    data = JSON.stringify(data);
    console.log(data);
    return this.http.post(this.apiUrl+"/"+url,data,{"headers":{"content-type":"application/json"}});
  }
  update(url:string,data:any):Observable<any>{
    data = JSON.stringify(data);
    return this.http.put(this.apiUrl+"/"+url,data,{"headers":{"content-type":"application/json"}});
  }
  delete(url:string):Observable<any>{
    return this.http.delete(this.apiUrl+"/"+url);
  }
  fetch(url:string):Observable<any>{
    return this.http.get(this.apiUrl+"/"+url);
  }



}
