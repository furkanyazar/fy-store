import { Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: Category[]
  path: string

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.path = this.router.url
    this.getAllCategories()
  }

  getAllCategories(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result.data
    })
  }

}
