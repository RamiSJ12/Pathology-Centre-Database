// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://your-backend-api-url/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/patients`);
  }

  getDoctors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/doctors`);
  }

  getTests(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tests`);
  }

  getAppointments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointments`);
  }

  getTestOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-orders`);
  }

  getTestResults(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-results`);
  }
}
