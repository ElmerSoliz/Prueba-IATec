import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:3000/api/v1/auth/login';

  constructor(private http: HttpClient) { }


  // login(crentials: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, crentials);
  // }
  login(credentials: any): Observable<any> {
    const headers = this.addTokenToHeaders();
    return this.http.post<any>(this.apiUrl, credentials, { headers });
  }

  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Nuevo método para agregar automáticamente el token a la cabecera
  addTokenToHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    const token = this.getToken();
  
    if (token) {
      return headers.set('Authorization', `Bearer ${token}`);
    }
  
    return headers;
  }
}
