import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressSectionComponent } from './components/address-section/address-section.component';
import { OrderSectionComponent } from './components/order-section/order-section.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',
    component:UserProfileComponent,
    children:[
      {
        path:'user',
        component:ProfileSectionComponent,
        pathMatch:'full'
      },
      {
        path:'order',
        component:OrderSectionComponent
      },
      {
        path:'address',
        component:AddressSectionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
