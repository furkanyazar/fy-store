import { HttpClient } from '@angular/common/http';
import { ApiUrl } from './../constants/apiUrl';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl: string = ApiUrl.API_URL + 'Categories/'

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl + 'GetAll')
  }

}
