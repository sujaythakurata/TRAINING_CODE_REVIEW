import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ordersList!:any;
  constructor(private http:HttpClient, private notify:NotificationService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    let header:any = {}
    let token = localStorage.getItem(environment.token);
    header[environment.token_header] = token
    this.http.get(environment.apiUrl+"order/info", {headers:header})
    .subscribe((data)=>{
      this.ordersList = data;
    })
  }

  updateStatus(id:number, status:number){
    let url = environment.apiUrl+"order/update";
    let header:any = {}
    let token = localStorage.getItem(environment.token);
    header[environment.token_header] = token
    this.http.post(url, {order_id:id, order_status:status}, {headers:header})
    .subscribe({
      next:(data:any)=>{
        this.notify.notification('success', data.msg, true, 'top-end');
        this.getOrders();
      },
      error:(err)=>{
        this.notify.notification('error', err.msg, true, 'top-end');
        console.log(err);
      }
    })

  }

}
