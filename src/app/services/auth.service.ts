import { Observable } from 'rxjs';
import { TokenModel } from './../models/tokenModel';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../constants/apiUrl';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = ApiUrl + 'Auth/'

  constructor(private httpClient: HttpClient) { }

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'Login', user)
  }

  isAuth(): boolean {
    return localStorage.getItem('token') ? true : false
  }
}
