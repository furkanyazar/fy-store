import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['categoryId'])
        this.getAllByCategoryId(params['categoryId'])
      else
        this.getAll()
    })
  }

  getAll(): void {
    this.productService.getAll().subscribe(result => {
      this.products = result.data
    })
  }

  getAllByCategoryId(categoryId: number): void {
    this.productService.getAllByCategoryId(categoryId).subscribe(result => {
      this.products = result.data
    })
  }

}
