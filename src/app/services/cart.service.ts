import { CartItems } from './../models/cartItems';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product): void {
    let item: CartItem = CartItems.find(cartItem => cartItem.product.productId === product.productId)

    if (item) {
      item.quantity++
    } else {
      let cartItem = new CartItem()
      cartItem.product = product
      cartItem.quantity = 1

      CartItems.push(cartItem)
    }
  }

  removeFromCart(product: Product): void {
    let item: CartItem = CartItems.find(cartItem => cartItem.product.productId === product.productId)

    CartItems.splice(CartItems.indexOf(item), 1)
  }

  increaseQuantity(product: Product): void {
    CartItems.find(cartItem => cartItem.product.productId === product.productId).quantity++
  }

  decreaseQuantity(product: Product): void {
    let item: CartItem = CartItems.find(cartItem => cartItem.product.productId === product.productId)

    item.quantity === 1 ? this.removeFromCart(product) : item.quantity--
  }

  getCartItems(): CartItem[] {
    return CartItems
  }

}
