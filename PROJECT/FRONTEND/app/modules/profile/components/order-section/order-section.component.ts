import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-section',
  templateUrl: './order-section.component.html',
  styleUrls: ['./order-section.component.css']
})
export class OrderSectionComponent implements OnInit {

  orderList:any=[];
  dupOrderList:any;
  loading:boolean = true;
  constructor(private orderSrvice:OrderService, private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getOrders(){
    let cartsId:any=[];
    let carts;
    let index;
    this.orderSrvice.getOrder()
    .subscribe(async (data)=>{
      await data.map(async (obj:any)=>{
        cartsId = await obj.carts.map((id:any)=>{return id.product_id});
        carts = await this.dupOrderList.filter((order:any)=>{
          if(cartsId.includes(order.id)){
            index = cartsId.indexOf(order.id)
            order.quntity = obj.carts[index].quntity;
            order.price = obj.carts[index].price;
            return order;
          }
        });
        obj.carts = carts;
        return obj;
      });
      this.orderList = data;
      console.log(this.orderList);
      this.loading = false;
    })
  }

  getAllOrders(){
    this.loading = true;
    this.productService.getProducts()
    .subscribe((data)=>{
      this.dupOrderList = data;
      this.getOrders();
    })
  }

  statusClass(staus:string):string{
    switch(staus){
      case '0':
        return 'bg-info';
      case '1':
        return 'bg-danger';
      case '2':
        return 'bg-success';
      default:
        return ''
    }
  }

}
