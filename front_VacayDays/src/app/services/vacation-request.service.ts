import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VacationRequest } from '../models/vacation-request.model';

@Injectable({
  providedIn: 'root'
})
export class VcationRequestService {
  private apiUrl = 'http://127.0.0.1:3000/api/v1/admin/';

  constructor(private http: HttpClient) { }

  getAllVacationRequests(): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>((this.apiUrl)+"vacationRequest");
  }

  getVacationRequestById(Id: number): Observable<VacationRequest> {
    return this.http.get<VacationRequest>(`${this.apiUrl}vacationRequest${Id}`);
  }

  getVacationRequestsByUserId(userId: number): Observable<VacationRequest[]> {
    return this.http.get<VacationRequest[]>(`${this.apiUrl}vacationUser${userId}`);
  }

  createVacationRequest(vacationRequest: VacationRequest): Observable<VacationRequest> {
    return this.http.post<VacationRequest>(this.apiUrl+"vacationRequest", vacationRequest);
  }

  updateVacationRequest(Id: number, vacationRequest: VacationRequest): Observable<VacationRequest> {
    return this.http.put<VacationRequest>(`${this.apiUrl}vacationRequest${Id}`, vacationRequest);
  }

  deleteVacationRequest(Id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}vacationRequest${Id}`);
  }
}