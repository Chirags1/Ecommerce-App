import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  getNewProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.backendUrl}/product/newProduct`);
  }

  getFeaturedProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.backendUrl}/product/featuredProduct`
    );
  }
}
