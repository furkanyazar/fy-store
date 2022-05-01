import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result.data
    })
  }

}
