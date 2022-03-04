import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addOrder(data:any):Observable<any>{
    let url = environment.apiUrl+"order"
    let headers:any = {}
    headers[environment.token_header] = localStorage.getItem(environment.token);
    return this.http.post(url, data, {headers:headers});
  }

  getOrder():Observable<any>{
    let url = environment.apiUrl+"order/info"
    let headers:any = {}
    headers[environment.token_header] = localStorage.getItem(environment.token);
    return this.http.get(url,{headers:headers});
  }


}
