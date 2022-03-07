import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {

    //if any product added to cart
    this.cartService.porductCount.next(0);
  }

}
