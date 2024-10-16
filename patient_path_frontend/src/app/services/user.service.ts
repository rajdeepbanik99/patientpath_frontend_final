import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class UserService {
  private apiUrl = 'http://localhost:8080/user'; // Adjust URL as needed

  constructor(private http: HttpClient) { }


  getUserData(email: any): Observable<any> {
    return this.http.get(this.apiUrl + "/" + email)
  }

  updateUserData(userData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, userData);
  }
}
