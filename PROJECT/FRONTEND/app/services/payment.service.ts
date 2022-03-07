import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient, private user:UserService, private route:Router) { }

  doPayment(data:any){
    this.user.getUser()
    .subscribe((userData)=>{
      let payload = 
        {
          "customer_details": {
            "customer_id":`${userData.id}`,
            "customer_email": `${userData.email}`,
            "customer_phone":`${userData.mobile}`
          },
          "order_id": `sku-${data.id}`,
          "order_amount": data.total_amount,
          "order_currency": "INR",
          "order_meta":{
              "return_url":environment.paymentReturnUrl
          }
        }
        this.http.post(environment.paymentUrl, JSON.stringify(payload), {headers: new HttpHeaders(environment.paymentsHeader)})
        .subscribe({
          next:(data:any)=>{
            this.route.navigateByUrl(data.payment_link)
          },
          error:(err)=>{
            console.error(err);
          }
        })
    })
    
  }


}
