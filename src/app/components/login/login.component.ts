import { Router } from '@angular/router';
import { TitleService } from './../../services/title.service';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from './../../models/loginModel';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Title } from 'src/app/constants/title';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private titleService: TitleService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(): void {
    this.titleService.setTitle('Login - ' + Title)
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    if (this.loginForm.valid) {
      let loginModel: LoginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(response => {
        this.router.navigate(['shop'])
        this.toastrService.success(response.message)
        localStorage.setItem('token', response.data.token)
      }, responseError => {
        this.toastrService.error(responseError.error)
      })
    }
  }

}
