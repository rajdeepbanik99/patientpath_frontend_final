import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Review {
  rating: number;
  comment: string;
}

export interface Booking {
  date: string;
  time: string;
  service: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private reviewsUrl = 'https://api.example.com/reviews'; // Replace with your actual API URL
  private bookingsUrl = 'http://localhost:3000/bookappointment'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Submit a review
  submitReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.reviewsUrl, review);
  }

  // Submit a booking
  submitBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking);
  }
}




