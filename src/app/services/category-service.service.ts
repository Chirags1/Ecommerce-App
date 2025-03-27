import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<category[]> {
    return this.http.get<category[]>(`${this.backendUrl}/category/allCategory`);
  }

  addCategory(data: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/category/addCategory`, data);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${this.backendUrl}/category/deleteCategory/${id}`);
  }

  updateCategory(id: string, data: any): Observable<any> {
    return this.http.put(
      `${this.backendUrl}/category/updateCategory/${id}`,
      data
    );
  }
}
