import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CustomerServiceService } from '../services/customer-service.service';
import { Product } from '../models/product';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [NgFor, ProductCardComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
})
export class HomeComponentComponent implements OnInit {
  featuredProduct: Product[] = [];
  newProduct: Product[] = [];

  constructor(private customer: CustomerServiceService) {}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.customer.getFeaturedProduct().subscribe((result) => {
      this.featuredProduct = result;
      console.log(this.featuredProduct);
    });
    this.customer.getNewProduct().subscribe((result) => {
      this.newProduct = result;
      console.log(this.newProduct);
    });
  }
}
