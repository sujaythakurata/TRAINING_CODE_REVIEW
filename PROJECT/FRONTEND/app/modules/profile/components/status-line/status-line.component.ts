import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-line',
  templateUrl: './status-line.component.html',
  styleUrls: ['./status-line.component.css']
})
export class StatusLineComponent implements OnInit {
  @Input()status!:number;
  constructor() { }

  class1!:string;
  progress1!:number;
  progress2!:number;
  class2!:string;
  class3!:string;

  ngOnInit(): void {
    this.orderStatus();
  }

  orderStatus(){

    for(let i = 0; i<=this.status; i++){
      if(i == 0){
        this.class1 = "bg-primary text-white"
        this.progress1 = 50;
      }
      else if(i == 1){
        this.progress1 = 100;
        this.class2 = "bg-primary text-white";
        this.progress2 = 50;
      }
      else if(i == 2){
        this.progress2 = 100;
        this.class3 = "bg-success text-white";
      }
    }

  }

}
