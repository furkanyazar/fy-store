import { Product } from './../models/product';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './../constants/apiUrl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = ApiUrl.API_URL + 'Products/'

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + 'GetAll')
  }

  getAllByCategoryId(categoryId: number): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + 'GetAllByCategoryId?categoryId=' + categoryId)
  }

}
