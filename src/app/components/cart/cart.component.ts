import { ToastrService } from 'ngx-toastr';
import { Product } from './../../models/product';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cartItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[]
  subtotal: number

  constructor(private cartService: CartService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getCartItems()

    this.subtotal = 0

    this.cartItems.forEach(item => {
      this.subtotal += item.quantity * item.product.unitPrice
    })
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product)
    this.toastrService.error("Sepetten kaldırıldı", product.productName)
    this.getCartItems()
  }

  increaseQuantity(product: Product): void {
    this.cartService.increaseQuantity(product)
    this.getCartItems()
  }

  decreaseQuantity(product: Product): void {
    this.cartService.decreaseQuantity(product)
    this.getCartItems()
  }

}
