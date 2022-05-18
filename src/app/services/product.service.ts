import { ProductModel } from './../models/productModel';
import { Product } from './../models/product';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './../constants/apiUrl';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = ApiUrl + 'Products/'

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + 'GetAll')
  }

  getAllByCategoryId(categoryId: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + 'GetAllByCategoryId?categoryId=' + categoryId)
  }

  add(product: ProductModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'Add', product)
  }

}
