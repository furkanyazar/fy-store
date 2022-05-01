import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.productService.getAll().subscribe(result => {
      this.products = result.data
    })
  }

}
