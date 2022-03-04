import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { OrderSectionComponent } from './components/order-section/order-section.component';
import { AddressSectionComponent } from './components/address-section/address-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderStatusPipe } from './pipes/order-status.pipe';
import { StatusLineComponent } from './components/status-line/status-line.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileSectionComponent,
    OrderSectionComponent,
    AddressSectionComponent,
    OrderStatusPipe,
    StatusLineComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  exports:[OrderStatusPipe]
})
export class ProfileModule { }
