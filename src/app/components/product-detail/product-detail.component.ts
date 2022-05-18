import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { TitleService } from './../../services/title.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/constants/title';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product
  dataLoaded: boolean = false

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private titleService: TitleService, private cartService: CartService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getById(params['productId'])
    })
  }

  getById(id: number): void {
    this.productService.getById(id).subscribe(result => {
      this.product = result.data
      this.dataLoaded = true

      this.titleService.setTitle(this.product.productName + ' - ' + Title)
    })
  }

  addToCart(): void {
    this.cartService.addToCart(this.product)
    this.toastrService.success("Sepete eklendi", this.product.productName)
  }

}
