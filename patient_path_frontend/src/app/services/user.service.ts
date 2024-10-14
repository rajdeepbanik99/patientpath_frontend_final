import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class UserService {
//   updateUserData: any;
//   getUserData(user: { name: string; email: string; number: string; }) {
//     throw new Error('Method not implemented.');
//   }
  
//   private apiUrl='http://localhost:3000/editprofile';


//   constructor(private http:HttpClient) { }

//   getCurrentUser(): Observable<any> {

//     const userId = this.getCurrentUserId();
//     return this.http.get<any>(`${this.apiUrl}/${userId}`);
//   }

//   updateUserProfile(user: any): Observable<any> {
//     const userId = this.getCurrentUserId();
//     return this.http.put<any>(`${this.apiUrl}/${userId}`, user);
//   }

//   private getCurrentUserId(): string {
//     // Logic to retrieve the current user's ID or token
//     return '123'; // Replace with actual logic
//   }

//   // getUserData(userData:any): Observable<any> {
//   //   return this.http.get<any>(this.apiUrl,userData);
//   // }

//   // getAppointment(userData:any): Observable<any>{
//   //   return this.http.get<any>(this.apiUrl,userData.appointment);
//   // }

//   // getNotification(userData:any):Observable<any>{
//   //   return this.http.get<any>(this.apiUrl,userData.notifications);
//   // }
// }



export class UserService {
  private apiUrl = 'http://localhost:3000/users/1'; // Adjust URL as needed

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateUserData(userData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, userData);
  }
}
