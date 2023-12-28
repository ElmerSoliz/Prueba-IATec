import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { VacationRequest } from '../models/vacation-request.model';

@Injectable({
  providedIn: 'root'
})
export class VcationRequestService {
  private apiUrl = 'http://127.0.0.1:3000/api/v1/admin/';

  constructor(private http: HttpClient) { }

  private addAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllVacationRequests(): Observable<VacationRequest[]> {
    const headers = this.addAuthorizationHeader();
    return this.http.get<VacationRequest[]>((this.apiUrl)+"vacationRequest", { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getVacationRequestById(Id: number): Observable<VacationRequest> {
    const headers = this.addAuthorizationHeader();
    return this.http.get<VacationRequest>(`${this.apiUrl}vacationRequest${Id}${ headers }`).pipe(
      catchError(this.handleError)
    );
  }

  getVacationRequestsByUserId(userId: number): Observable<VacationRequest[]> {
    const headers = this.addAuthorizationHeader();
    return this.http.get<VacationRequest[]>(`${this.apiUrl}vacationUser${userId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  createVacationRequest(vacationRequest: VacationRequest): Observable<VacationRequest> {
    const headers = this.addAuthorizationHeader();
    return this.http.post<VacationRequest>(`${this.apiUrl}vacationRequest`, vacationRequest, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateVacationRequest(Id: number, vacationRequest: VacationRequest): Observable<VacationRequest> {
    const headers = this.addAuthorizationHeader();
    return this.http.put<VacationRequest>(`${this.apiUrl}vacationRequest${Id}`, vacationRequest, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deleteVacationRequest(Id: number): Observable<void> {
    const headers = this.addAuthorizationHeader();
    return this.http.delete<void>(`${this.apiUrl}vacationRequest${Id}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('Error en la solicitud:', error);
    return throwError('Algo salió mal. Por favor, inténtelo de nuevo más tarde.');
  }
}