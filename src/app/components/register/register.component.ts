import { Router } from '@angular/router';
import { TitleService } from './../../services/title.service';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/registerModel';
import { Title } from 'src/app/constants/title';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private titleService: TitleService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Register - ' + Title)
    this.createRegisterForm()
  }

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register(): void {
    if (this.registerForm.valid) {
      let registerModel: RegisterModel = Object.assign({}, this.registerForm.value)

      this.authService.register(registerModel).subscribe(response => {
        this.router.navigate(['/shop'])
        this.toastrService.success(response.message)
        localStorage.setItem('token', response.data.token)
      }, responseError => {
        this.toastrService.error(responseError.error)
      })
    }
  }

}
