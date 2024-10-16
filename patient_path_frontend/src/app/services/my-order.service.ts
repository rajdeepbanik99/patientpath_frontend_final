import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyOrderService {
  private apiUrl = 'http://localhost:8080/bookappointment';

  orders = 'http://localhost:8080/bookappointment/orders';
  constructor(private http: HttpClient) { }


  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAppoinmentsByEmail(email: any): Observable<any> {
    return this.http.get<any[]>(this.orders + "/" + email)
  }


  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, appointment);
  }


  deleteAppointment(appointmentId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${appointmentId}`);
  }


  updateAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${appointment.id}`, appointment);
  }



}


