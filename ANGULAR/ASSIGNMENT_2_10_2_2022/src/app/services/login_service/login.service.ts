import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

  login(data:{email:string,pwd:string}):Observable<any>{
    let url = `${environment.apiUrl}/${environment.user}?email=${data.email}&pwd=${data.pwd}`;
    return this.http.get(url);
  }

}
