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

  private apiUrl = 'http://localhost:8080/admin/login'; // Your API endpoint for admin

  constructor(private http: HttpClient) {}

  loginadmin(credentials: { email: string; password: string }): Observable<any> {
    console.log("Thi sis working in service")
    return this.http.post(this.apiUrl, credentials);
  }
}
