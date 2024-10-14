
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorlistService {
  private apiUrl = 'http://localhost:3000/doctorlist'; 
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any[]> {  
    return this.http.get<any[]>(this.apiUrl);
  }
}
  



