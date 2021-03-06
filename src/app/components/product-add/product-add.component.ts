import { Title } from './../../constants/title';
import { TitleService } from './../../services/title.service';
import { ProductModel } from './../../models/productModel';
import { ProductService } from './../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ValidationErrorDetails } from 'src/app/models/validationErrorDetails';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProductForm: FormGroup
  categories: Category[]
  validationErrors: ValidationErrorDetails

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastrService: ToastrService, private categoryService: CategoryService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Add Product - ' + Title)
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
        if (responseError.status == 400) {
          this.validationErrors = responseError.error
          this.validationErrors.Errors.forEach(err => {
            this.toastrService.error(err.ErrorMessage)
          })
        } else {
          this.toastrService.error(responseError.error.Message)
        }
      })
    }
  }

  getAllCategories(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result.data
    })
  }

}
