import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../classes/Categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(type:number=0, limit:number=0):Observable<any>{
    let url = environment.productUrl;
    if(type != 0)
      url += "/category/"+category[type];
    url += "?"
    if(limit != 0)
      url += "limit="+limit;
    return this.http.get(url);
  }

  getProductsInfo(orderId:number, productId?:number):Observable<any>{
    let url = environment.apiUrl+"cart/productinfo"+"?order_id="+orderId;
    if(productId)
      url += "&"+"product_id="+productId;
    let headers:any = {};
    headers[environment.token_header] = localStorage.getItem(environment.token);
    return this.http.get(url, {headers:headers, responseType:"json"});
  }


}
