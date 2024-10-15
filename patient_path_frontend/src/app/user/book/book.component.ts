import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Adjust the path as necessary
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookAppointmentForm!: FormGroup;
  hospitals: any[] = [];
  filteredSpecialists: any[] = [];
  filteredDoctors: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private bookServices: AuthService,
    private router: Router,
    private _snax: MatSnackBar
  ) {
    this.bookAppointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], // Add pattern validation for numbers
      hospital: ['', Validators.required],
      doctors: ['', Validators.required],
      specialist: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.bookServices.getAllData().subscribe(
      {
        next:(res:any)=>{
          this.hospitals=res;
        }
      }
    );

    // Listen to hospital changes
    this.bookAppointmentForm.get('hospital')?.valueChanges.subscribe(selectedHospital => {
      this.filterSpecialists(selectedHospital);
      this.filterDoctors(); // Reset doctors when hospital changes
    });

    // Listen to specialist changes
    this.bookAppointmentForm.get('specialist')?.valueChanges.subscribe(selectedSpecialist => {
      this.filterDoctors();
    });
  }

  filterSpecialists(selectedHospital: string): void {
    const hospital = this.hospitals.find(h => h.hospitalName === selectedHospital);
    this.filteredSpecialists = hospital ? hospital.specialists : [];
    this.bookAppointmentForm.get('specialist')?.setValue(''); // Reset specialist selection
    this.filteredDoctors = []; // Reset doctors when hospital changes
  }

  filterDoctors(): void {
    const selectedHospital = this.bookAppointmentForm.get('hospital')?.value;
    const selectedSpecialist = this.bookAppointmentForm.get('specialist')?.value;

    const hospital = this.hospitals.find(h => h.hospitalName === selectedHospital);
    this.filteredDoctors = this.hospitals.filter(d => d.specialist === selectedSpecialist) || [];
  }

  onBookSubmit() {
    if (this.bookAppointmentForm.valid) {
      console.log(new Date() + "  " + this.bookAppointmentForm.value.date);
      const selectedDate = new Date(this.bookAppointmentForm.value.date);
      console.log(selectedDate);
      if (selectedDate >= new Date()) {
        this.bookServices.submitBooking(this.bookAppointmentForm.value).subscribe(
          res => {
            this._snax.open("Booked successfully", "Close", { duration: 4000 });
            this.bookAppointmentForm.reset();
          }
        );
      } else {
        this._snax.open("Check the date properly", "Close", { duration: 4000 });
      }
    }
  }
}





// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service'; // Adjust the path as necessary
// import { Router } from '@angular/router';
// import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.css']
// })
// export class BookComponent implements OnInit{

//   bookAppointmentForm!:FormGroup;
//   reviewForm!:FormGroup;
//   hospitals: any[]=[];
// // bookingForm: any;
// // review: any;

  
//   constructor(
//     private formBuilder:FormBuilder,
//     private bookServices:AuthService,
//     private router:Router,
//     private _snax:MatSnackBar
//   ){
//     hospital: ['']
//     this.bookAppointmentForm=this.formBuilder.group({
//       name:['',Validators.required],
//       email:['',Validators.required],
//       number:['',Validators.required],
//       hospital:['',Validators.required],
//       doctors:['',Validators.required],
//       specialist:['',Validators.required],
//       date:['',Validators.required],
//       time: ['', Validators.required] 
//     })
//     ;
//     this.reviewForm=this.formBuilder.group({
//       writeReview:['',Validators.required]
//     });

//   }
//   ngOnInit(): void {
//     this.bookServices.getAllData().subscribe(
//       (response)=>{
//         this.hospitals=response;
      
//         console.log(this.hospitals);
//       },(error)=>{
//         console.log(error);
//       }
//     )
//   }


 
// //   onSubmit() {
// //     if(this.reviewForm.value){
// //       this.bookServices.submitReview(this.reviewForm.value).subscribe(
// //         {
// //           next:()=>{
// //           alert("review submitted successfully");
// //           this.reviewForm.reset();
// //           }
// //         }
// //       )
// //   }
// // }


//     onSubmit(){
//       if(this.reviewForm.value) {
          
//          this.bookServices.submitReview(this.reviewForm.value).subscribe(
//            res=>{
//              alert("review submitted");
//              this.reviewForm.reset();
//            }
//          )
//       }
//     }


//   onBookSubmit(){
//     if(this.bookAppointmentForm.value){
//       console.log(new Date()+"  "+this.bookAppointmentForm.value.date);
//       const selectedDate = new Date(this.bookAppointmentForm.value.date)
//       console.log(selectedDate)
//       if(selectedDate>=new Date()){
//     this.bookServices.submitBooking(this.bookAppointmentForm.value).subscribe(
//       res=>{
//         this._snax.open("booked successfully","close",{duration:40000})
//         this.bookAppointmentForm.reset();
//       }
//     )
//   }else{
//     this._snax.open("check the date properly","close",{duration:40000})
//   }
//   }


// }
  
// // onSubmit(_t99: NgForm) {
// // throw new Error('Method not implemented.');
// // }
//   // review = {writeReview: '' }; // Model for review
// //   review = {rating:0,comment: ''};

//   booking = {name: '',number: '', email: '',hospital: '',doctors: '',specialist: '',date: ''};
// //   // booking = { name:'',number:'',email:'',date: '', time: '', service: '' }; // Model for booking

// //   constructor(private authService: AuthService) {}

// //   // Handle review form submission
// //   onReviewSubmit(reviewForm: NgForm) {
// //     if (reviewForm.valid) {
// //       this.authService.submitReview(this.review).subscribe(
// //         response => {
// //           console.log('Review submitted successfully:', response);
// //           reviewForm.reset(); // Reset form after successful submission
// //         },
// //         error => {
// //           console.error('Error submitting review:', error);
// //         }
// //       );
// //     } else {
// //       console.log('Review form is invalid');
// //     }
// //   }

// //   // Handle booking form submission
// //   onBookSubmit(bookingForm: NgForm) {
// //     if (bookingForm.valid) {
// //       this.authService.submitBooking(this.booking).subscribe(
// //         response => {
// //           console.log('Booking submitted successfully:', response);
// //           bookingForm.reset(); // Reset form after successful submission
// //         },
// //         error => {
// //           console.error('Error submitting booking:', error);
// //         }
// //       );
// //     } else {
// //       console.log('Booking form is invalid');
// //     }
// //   }
// }
