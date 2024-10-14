import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private reviewsUrl = 'http://localhost:3000/review'; // Replace with your actual API URL
  private bookingsUrl = 'http://localhost:3000/bookappointment'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Submit a review
  submitReview(reviewData:any): Observable<any> {
    return this.http.post<any>(this.reviewsUrl, reviewData);
  }

  // Submit a booking
  // submitBooking(booking: {name: string,number: string,email: string,hospital: string,doctors: string,specialist: string, date: string;}): Observable<any> {
  //   return this.http.post(this.bookingsUrl, booking);
  // }

  submitBooking(bookingData:any):Observable<any>{
     return this.http.post<any>(this.bookingsUrl,bookingData);
  }



}
