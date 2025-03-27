import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { Product, productDelete } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  backendUrl = environment.backendUrl;

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.backendUrl}/product/getProduct`);
  }

  deleteProduct(id: string): Observable<productDelete> {
    return this.http.delete<productDelete>(
      `${this.backendUrl}/product/deleteProduct/${id}`
    );
  }

  addProduct(data: Product): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/product/addProduct`, data);
  }

  updateProduct(id: string, data: Product): Observable<any> {
    return this.http.put<any>(
      `${this.backendUrl}/product/updateProduct/${id}`,
      data
    );
  }

  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.backendUrl}/product/${id}`);
  }
}
