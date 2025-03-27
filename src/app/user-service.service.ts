import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService implements OnInit {
  backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  register(data: string): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/user/register`, data);
  }

  login(data: string): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/user/login`, data);
  }
}
