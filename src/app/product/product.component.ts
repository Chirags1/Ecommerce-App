import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Product } from '../models/product';
import { MatSort } from '@angular/material/sort';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product',
  imports: [
    MatFormField,
    MatLabel,
    RouterLink,
    MatPaginator,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'shortDescription',
    'description',
    'price',
    'discount',
    'action',
  ];
  dataSource!: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.getProductData();
  }

  getProductData() {
    this.productService.getProduct().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe((msg) => {
      alert(msg.message);
      this.getProductData();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
