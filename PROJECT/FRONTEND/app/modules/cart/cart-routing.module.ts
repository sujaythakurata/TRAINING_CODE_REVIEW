import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreCheckoutComponent } from './components/pre-checkout/pre-checkout.component';

const routes: Routes = [{
  path:'',
  component:PreCheckoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
