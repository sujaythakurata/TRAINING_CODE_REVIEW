import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { PreCheckoutComponent } from './components/pre-checkout/pre-checkout.component';
import { SectionModule } from '../section/section.module';


@NgModule({
  declarations: [
    PreCheckoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SectionModule
  ]
})
export class CartModule { }
