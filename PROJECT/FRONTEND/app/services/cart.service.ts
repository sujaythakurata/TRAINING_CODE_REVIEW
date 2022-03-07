import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  porductCount:Subject<number> = new Subject<number>();
  constructor(private http:HttpClient) { }

  addTocart(productId:number, count:number, price:number, orderId:number, cartCount:number):Observable<any>{
    let url = environment.apiUrl+"cart"
    let headers:any = {}
    let payLoad = {
      product_id:productId,
      quntity:count,
      order_id:orderId,
      price:price
    }
    console.log(payLoad);
    headers[environment.token_header] = localStorage.getItem(environment.token);
    return this.http.post(url, payLoad, {headers:headers, responseType:'json'});
  }



}
