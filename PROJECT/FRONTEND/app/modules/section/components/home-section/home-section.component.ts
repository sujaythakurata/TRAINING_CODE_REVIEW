import { Component, OnInit, ViewChild } from '@angular/core';
import { MenSectionComponent } from '../men-section/men-section.component';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent implements OnInit {

  priceRange:number = 0;
  @ViewChild(MenSectionComponent)
  private menComponent!:MenSectionComponent;
  constructor() { }

  ngOnInit(): void {
  }

  sortByPrice(value:{price:number, rating:number}){
    this.menComponent.sortPrice(value.price, value.rating);
  }

}
