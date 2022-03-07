import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-pre-checkout',
  templateUrl: './pre-checkout.component.html',
  styleUrls: ['./pre-checkout.component.css']
})
export class PreCheckoutComponent implements OnInit {

  productList:any;
  dupProductList:any;
  productsId:any;
  subTotal:number = 0;
  tax:number = 0;
  total:number = 0;
  rate = 18;
  shipFee = 100;
  loggedIn:boolean = false;
  userData:any;
  loading:boolean = true;
  constructor(
    private productService:ProductService, 
    private cartService:CartService,
    private auth:AuthService,
    private user:UserService,
    private notify:NotificationService,
    private order:OrderService,
    private payment:PaymentService,
    private route:Router,
    private activeRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.trackProduct();
    this.getUserInfo();
    this.cartService.porductCount.next(0);
    this.authUser();
    this.auth.authenticate();
    this.checkPayment();
  }

  getAllProducts(){
    this.loading = true;
    this.productService.getProducts()
    .subscribe((data)=>{
      this.dupProductList = data;
      this.getCartProducts();
    })
  }

  getCartProducts(){
    this.productService.getProductsInfo(-1)
    .subscribe(async (cartData)=>{
      this.subTotal = 0;
      let productsId = await cartData.map((d:any)=>{return d.product_id});
      this.productList = await this.dupProductList.filter((data:any)=>{
        if(productsId.includes(data.id)){
          let index = productsId.indexOf(data.id);
          data.cartInfo = cartData[index];
          this.subTotal += cartData[index].price * cartData[index].quntity;
          return data;
        }
        this.loading = false;
      });
      this.calculateTax();
    })
  }

  calculateTax(){
    this.tax = Math.round(this.subTotal * .18);
    this.total = this.subTotal + this.tax;
    if(this.total<500){
      this.total += this.shipFee
      this.tax += this.shipFee
    }

  }

  authUser(){
    this.auth.userLogin.subscribe((data)=>{
      this.loggedIn = data.login;
    })
  }

  trackProduct(){
    this.cartService.porductCount.subscribe((data)=>{
      console.log("I am from cart");
      if(this.productList?.length>0)
        this.getCartProducts();
    })
  }

  getUserInfo(){
    this.user.getUser()
    .subscribe((data)=>{
      console.log(data);
      this.userData = data;
    });
  }


  placeOrder(){
    this.loading = true;
    if(this.userData.address != null && this.total>0){
      let data = {
        total_amount:this.total,
        order_status:0
      }
      this.order.addOrder(data).subscribe({
        next:(data)=>{
          this.getCartProducts();
          this.notify.notification('success', data.msg, true, 'top-end');
          this.cartService.porductCount.next(0);
          console.log(data);
          location.href = data.data[1].payment_link;
        },
        error:err=>{
          console.error(err);
          this.notify.notification('error', err.msg, true, 'top-end');
        }
      }
      )
    }else{
      this.notify.notification('warning', 'Add Address to place order', true, 'top-end');
    }
  }

  checkPayment(){
    this.activeRoute.queryParamMap.forEach((obj)=>{
      if(obj.get('order_id') != undefined){
        this.notify.notification('success', "Payment Done Successfully", false, 'middle');
        setTimeout(() => {
          this.route.navigate(['/cart']);
        }, 1500);
      }
    })
  }

}
