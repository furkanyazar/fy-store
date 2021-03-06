import { CartService } from './../../services/cart.service';
import { TitleService } from '../../services/title.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from 'src/app/constants/title';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  dataLoaded: boolean = false
  products: Product[]
  numberOfProducts: number
  page: number = 1
  filterText: string

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private titleService: TitleService, private toastrService: ToastrService, private cartService: CartService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Shop - ' + Title)
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
      this.numberOfProducts = result.data.length
      this.dataLoaded = true
    })
  }

  getAllByCategoryId(categoryId: number): void {
    this.productService.getAllByCategoryId(categoryId).subscribe(result => {
      this.products = result.data
      this.numberOfProducts = result.data.length
      this.dataLoaded = true
    })
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product)
    this.toastrService.success("Sepete eklendi", product.productName)
  }

}
