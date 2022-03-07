import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { category } from 'src/app/classes/Categories';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-men-section',
  templateUrl: './men-section.component.html',
  styleUrls: ['./men-section.component.css']
})
export class MenSectionComponent implements OnInit {

  productCategory!:number;
  productData:any;
  dupProductData:any;
  loading:boolean = true;
  loggedIn:boolean = false;

  //for view details modal
  productTitle!:string;
  productDesc!:string;
  productImg!:string;
  productType!:string;
  prdoductPrice!:number;
  productButtonData:any;



  constructor(private product:ProductService, private route:ActivatedRoute, private auth:AuthService) { }

  ngOnInit(): void {
    this.getParam();
    this.authUser();
    this.auth.authenticate();
  }

  getParam():void{
    this.route.params.subscribe((cat:any)=>{
      this.productCategory = cat.category;
      this.getProducts();
    })
  }

  getProducts(): void{
    this.loading = true;
    this.product.getProducts(this.productCategory)
    .subscribe((data)=>{
      this.productData = data;
      this.dupProductData = data;
      this.loading = false;
    })
  }

  sortPrice(price:number, rating:number):void{
    this.productData = this.dupProductData.filter((data:any)=>{
        if(data.price>=price && data.rating>rating)
        return data;
    })
  }

  authUser(){
    this.auth.userLogin.subscribe((data)=>{
      this.loggedIn = data.login;
    })
  }

  setModalData(data:any){
    console.log(data);
    this.productTitle = data.title;
    this.productDesc  = data.description;
    this.productImg = data.image;
    this.productType = data.category;
    this.prdoductPrice = 100;
    this.productButtonData = data;
  }

 

}
