import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-deals-section',
  templateUrl: './deals-section.component.html',
  styleUrls: ['./deals-section.component.css']
})
export class DealsSectionComponent implements OnInit {

  productData!:any;
  loggedIn:boolean = false;
  constructor(private product:ProductService, private notify:NotificationService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getProducts();
    this.userloggedIn();
  }

  getProducts():void{
    this.product.getProducts(0,4)
    .subscribe({
      next:(data)=>{
        this.productData = data;
      },
      error:(err)=>{
        this.notify.notification("danger", err.message, true, 'top-end');
      }
    })
  }

  userloggedIn(){
    this.auth.userLogin.subscribe((data:any)=>{
      this.loggedIn = data.login;
    })
    this.auth.authenticate();
  }

}
