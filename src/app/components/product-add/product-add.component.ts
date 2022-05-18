import { ProductModel } from './../../models/productModel';
import { ProductService } from './../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup
  categories: Category[]

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastrService: ToastrService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.createAddProductForm()
    this.getAllCategories()
  }

  createAddProductForm(): void {
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      categoryId: [1, Validators.required],
      unitPrice: [1, Validators.required],
      unitsInStock: [1, Validators.required],
      imageUrl: ['']
    })
  }

  addProduct(): void {
    if (this.addProductForm.valid) {
      let productModel: ProductModel = Object.assign({}, this.addProductForm.value)

      this.productService.add(productModel).subscribe(response => {
        this.toastrService.success(response.message)
        this.createAddProductForm()
      }, responseError => {
        this.toastrService.error(responseError.error.Message)
      })
    }
  }

  getAllCategories(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result.data
    })
  }

}
