import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:3000/api/v1/admin/user';

  constructor(private http: HttpClient, private authService: AuthService) { }

  // getAllUsers(): Observable<User[]> {
  //   const headers = this.authService.getHeaders();
  //   return this.http.get<User[]>(`${this.apiUrl}, ${ headers }`);
  // }

  getAllUsers(): Observable<User[]> {
    // Obtén el token almacenado
    const token = this.authService.getToken();
    console.log('Token para la solicitud:', token);
    
    // Configura los encabezados con el token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    // Realiza la solicitud con los encabezados configurados
    return this.http.get<User[]>(this.apiUrl, { headers: headers });
  }
  

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}${userId}`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${userId}`);
  }
}