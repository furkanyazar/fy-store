import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  auth: boolean
  categories: Category[]
  path: string

  constructor(private categoryService: CategoryService, private router: Router, private authService: AuthService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.path = this.router.url
    this.getAllCategories()
    this.isAuth()
  }

  getAllCategories(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result.data
    })
  }

  isAuth(): void {
    this.auth = this.authService.isAuth()
  }

  logout(): void {
    this.authService.logout()
    this.toastrService.success('Çıkış yapıldı')

    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

}
