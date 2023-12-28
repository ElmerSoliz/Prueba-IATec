import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:3000/api/v1/admin/user';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private addAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllUsers(): Observable<User[]> {
    const headers = this.addAuthorizationHeader();
    return this.http.get<User[]>(this.apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  
  getUserById(userId: number): Observable<User> {
    const headers = this.addAuthorizationHeader();
    return this.http.get<User>(this.apiUrl + userId, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  

  createUser(user: User): Observable<User> {
    const headers = this.addAuthorizationHeader();
    return this.http.post<User>(this.apiUrl, user , { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(userId: number, user: User): Observable<User> {
    const headers = this.addAuthorizationHeader();
    return this.http.put<User>(`${this.apiUrl}${userId}`, user, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(userId: number): Observable<void> {
    const headers = this.addAuthorizationHeader();
    return this.http.delete<void>(`${this.apiUrl}${userId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la solicitud:', error);
    return throwError('Algo salió mal. Por favor, inténtelo de nuevo más tarde.');
  }
}