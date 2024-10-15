import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyOrderService {
  private apiUrl = 'http://localhost:8001/bookappointment';  

  constructor(private http: HttpClient) {}

  
  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  
  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, appointment);
  }

  
  deleteAppointment(appointmentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${appointmentId}`);
  } 

  
updateAppointment(appointment: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${appointment.id}`, appointment);
}



}

 
