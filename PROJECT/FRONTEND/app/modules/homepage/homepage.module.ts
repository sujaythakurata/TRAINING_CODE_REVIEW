import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { DealsSectionComponent } from './components/deals-section/deals-section.component';
import { ReviewSectionComponent } from './components/review-section/review-section.component';
import { HomeComponent } from './components/home/home.component';
import { SectionModule } from '../section/section.module';


@NgModule({
  declarations: [
    BannerComponent,
    DealsSectionComponent,
    ReviewSectionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SectionModule
  ]
})
export class HomepageModule { }
