// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminloginService {

//   constructor() { }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private apiUrl = 'http://localhost:3000/admin'; // Your API endpoint for admin

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
