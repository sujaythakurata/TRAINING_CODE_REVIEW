import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{

  imgUrl:string = "/assets/images/logo/logo-5.png";
  cartCount!:number;
  username!:string | null;
  userLogin:boolean = false;
  userLoginSubscriber!:any;
  constructor(
    private cartService:CartService, 
    private login:LoginService, 
    private auth:AuthService, 
    private notify:NotificationService,
    private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.getCartCount();
    this.loggedin();
    this.cartService.porductCount.next(0);
  }

  //dispaly login menus for loggedin user
  loggedin(){
    this.auth.authenticate();
    this.userLoginSubscriber = this.auth.userLogin.subscribe(
      {
        next:data=>{
          this.username = data.username;
          this.userLogin = data.login;
        },
        error:err=>{
          console.log('user not loggedin');
        }
      }
    )
  }

  ///user logout
  logout(){
    console.log("here I am");
    this.login.logout();
    this.auth.authenticate();
  }

  getCartCount():void{
    this.cartService.porductCount.subscribe((count:number)=>{
      this.productService.getProductsInfo(-1)
      .subscribe((data)=>{
        this.cartCount = 0;
        data.map((d:any)=>{
          this.cartCount += d.quntity;
        })
      })
    })
  }

  ngOnDestroy(): void {
      this.userLoginSubscriber.unsubscribe();
  }

}
