import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { MenSectionComponent } from './components/men-section/men-section.component';
import { SortComponent } from './components/sort/sort.component';
import { FormsModule } from '@angular/forms';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { ViewdetailsDirective } from './directives/viewdetails.directive';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({
  declarations: [
    HomeSectionComponent,
    MenSectionComponent,
    SortComponent,
    CartButtonComponent,
    ViewdetailsDirective,
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    FormsModule,
    NgxImageZoomModule
  ],
  exports:[CartButtonComponent]
})
export class SectionModule { }
