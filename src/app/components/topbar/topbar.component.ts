import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  numberOfCartItems: number

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getNumberOfCartItems()
  }

  getNumberOfCartItems(): void {
    this.numberOfCartItems = this.cartService.getCartItems().length
  }

}
