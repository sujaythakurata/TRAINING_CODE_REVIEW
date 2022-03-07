import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  priceRange:number = 5;
  startList = ['black', 'black', 'black', 'black', 'black']
  rating = 1;
  @Output() filter = new EventEmitter<{price:number, rating:number}>();
  constructor() { }

  ngOnInit(): void {
  }

  filterPrice(){
    this.filter.emit({price:this.priceRange, rating:this.rating});
  }

  filterRating(value:number){
    for(let i = 0; i<value; i++)
      this.startList[i] = 'golden';
    for(let i= value; i<5; i++)
      this.startList[i] = 'black';
    this.rating = value;
    this.filter.emit({price:this.priceRange, rating:value});
  }

  resetFilter(){
    for(let i= 0; i<5; i++)
      this.startList[i] = 'black';
    this.priceRange = 5;
    this.filter.emit({price:0, rating:0})
  }

}
