import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class BrandServiceService {
  constructor(private http: HttpClient) {}

  backendUrl = environment.backendUrl;

  getData(): Observable<any> {
    return this.http.get(`${this.backendUrl}/brand/getBrand`);
  }

  deleteBrand(id: string): Observable<any> {
    return this.http.delete(`${this.backendUrl}/brand/deleteBrand/${id}`);
  }

  addBrand(data: { name: string }): Observable<any> {
    return this.http.post(`${this.backendUrl}/brand/addBrand`, data);
  }

  updateBrand(id: string, data: { name: string }): Observable<any> {
    return this.http.put(`${this.backendUrl}/brand/updateBrand/${id}`, data);
  }
}
