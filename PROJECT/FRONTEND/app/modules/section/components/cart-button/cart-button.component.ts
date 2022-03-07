import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  @Input()product:any;
  @Input()loggedIn:boolean = false;
  displayButton:boolean = false;
  addMsg = "Product added to cart";
  removeMsg = "Product removed from cart";
  constructor(
    private cartService:CartService, 
    private auth:AuthService, 
    private notify:NotificationService,
    private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.displayAddCartButton(true);
    //this.toggleButton();
    // this.cartService.addTocart(this.product.count);
  }

  toggleButton(){
    if(this.product.id == 1)
      this.displayButton = true;
    else
      this.displayButton = false;
  }

  incr():void{
    if(this.product.count<100)
    this.product.count += 1;
    this.addProduct(this.addMsg, 1);
  }

  desc():void{
    if(this.product.count >1)
      this.product.count -= 1;
    else{ 
      this.displayButton = false;
      this.product.count -= 1;
    }
    this.addProduct(this.removeMsg, -1);
  }



  displayAddCartButton(from:boolean):void{
    if(this.loggedIn){
      this.productService.getProductsInfo(-1, this.product.id).subscribe({
        next:(data:any)=>{
          if(!from)
            this.displayButton = true;
          if(data.length>0 && data[0].quntity>0){
            this.displayButton = true;
            this.product.count = data[0].quntity;
            this.cartService.porductCount.next(data[0].quntity);
          }else{
            this.product.count = 1;
          }
          if(!from)
            this.addProduct(this.addMsg, 1);
        },
        error:(err:any)=>{

        }
      });
    }else{
      if(!from)
        this.notify.notification('warning', 'Login to add product', true, 'top-end');
    }
    


    // if(this.auth.authenticate()){
    //   this.displayButton = true;
    //   this.product.count = 0;
    //   this.incr();
    // }
  }

  addProduct(msg:string, cartCount:number){
    console.log(this.product);
    this.cartService.addTocart(this.product.id, this.product.count, this.product.price, -1, cartCount)
    .subscribe((data)=>{
      this.cartService.porductCount.next(1);
      this.notify.notification('success', msg, true, 'top-end');
    })
  }

}
