


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  signUp(signupData: any): Observable<any> {
    return this.http.post(this.apiUrl, signupData);
  }
}

