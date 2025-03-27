import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../services/category-service.service';
import { NgFor } from '@angular/common';
import { category } from '../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  category: category[] = [];
  constructor(
    private categoryService: CategoryServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((result) => {
      console.log(result);
      this.category = result;
    });
  }

  searchProducts(value: any) {
    this.router.navigateByUrl('/productSearch?search=' + value);
  }
}
