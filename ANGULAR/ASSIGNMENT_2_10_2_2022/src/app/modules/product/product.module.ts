import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductRouteModule } from './product-route.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductRouteModule,
    FormsModule
  ]
})
export class ProductModule { }
