
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookAppointmentForm!: FormGroup;
  reviewForm!: FormGroup;
  hospitals: any[] = [];
  // bookingForm: any;
  // review: any;
  uniqueHospitals: Array<string> = [];
  uniqueDoctors: Array<string> = [];
  uniqueSpecialists: Array<string> = [];

  constructor(
    private formBuilder: FormBuilder,
    private bookServices: AuthService,
    private router: Router,
    private _snax: MatSnackBar
  ) {
    hospital: ['']
    doctor: ['']
    specialist: ['']
    this.bookAppointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      hospitalName: ['', Validators.required],
      doctorName: ['', Validators.required],
      specialist: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
      ;
    this.reviewForm = this.formBuilder.group({
      writeReview: ['', Validators.required]
    });

  }
  ngOnInit(): void {
    this.bookServices.getAllData().subscribe(
      (response) => {
        this.hospitals = response;
        this.extractUniqueValues();
        console.log(this.hospitals);
      }, (error) => {
        console.log(error);
      }
    )
  }

  extractUniqueValues() {
    const hospitalNames = new Set(this.hospitals.map(doctor => doctor.hospitalName));
    const doctorNames = new Set(this.hospitals.map(doctor => doctor.doctorName));
    const specialistNames = new Set(this.hospitals.map(doctor => doctor.doctorSpilist));

    this.uniqueHospitals = Array.from(hospitalNames);
    this.uniqueDoctors = Array.from(doctorNames);
    this.uniqueSpecialists = Array.from(specialistNames);

  }





  onSubmit() {
    if (this.reviewForm.value) {

      this.bookServices.submitReview(this.reviewForm.value).subscribe(
        res => {
          alert("review submitted");
          this.reviewForm.reset();
        }
      )
    }
  }


  onBookSubmit() {
    if (this.bookAppointmentForm.value) {
      console.log(new Date() + "  " + this.bookAppointmentForm.value.date);
      const selectedDate = new Date(this.bookAppointmentForm.value.date)
      console.log(selectedDate)
      if (selectedDate >= new Date()) {
        this.bookServices.submitBooking(this.bookAppointmentForm.value).subscribe(
          res => {
            this._snax.open("booked successfully", "close", { duration: 40000 })
            this.bookAppointmentForm.reset();
          }
        )
      } else {
        this._snax.open("check the date properly", "close", { duration: 40000 })
      }
    }


  }

  // onSubmit(_t99: NgForm) {
  // throw new Error('Method not implemented.');
  // }
  // review = {writeReview: '' }; // Model for review
  //   review = {rating:0,comment: ''};

  booking = { name: '', number: '', email: '', hospital: '', doctors: '', specialist: '', date: '' };
  //   // booking = { name:'',number:'',email:'',date: '', time: '', service: '' }; // Model for booking

  //   constructor(private authService: AuthService) {}

  //   // Handle review form submission
  //   onReviewSubmit(reviewForm: NgForm) {
  //     if (reviewForm.valid) {
  //       this.authService.submitReview(this.review).subscribe(
  //         response => {
  //           console.log('Review submitted successfully:', response);
  //           reviewForm.reset(); // Reset form after successful submission
  //         },
  //         error => {
  //           console.error('Error submitting review:', error);
  //         }
  //       );
  //     } else {
  //       console.log('Review form is invalid');
  //     }
  //   }

  //   // Handle booking form submission
  //   onBookSubmit(bookingForm: NgForm) {
  //     if (bookingForm.valid) {
  //       this.authService.submitBooking(this.booking).subscribe(
  //         response => {
  //           console.log('Booking submitted successfully:', response);
  //           bookingForm.reset(); // Reset form after successful submission
  //         },
  //         error => {
  //           console.error('Error submitting booking:', error);
  //         }
  //       );
  //     } else {
  //       console.log('Booking form is invalid');
  //     }
  //   }
}
