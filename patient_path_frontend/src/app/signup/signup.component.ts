



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private signupService: SignupService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required], 
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required], 
      password: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      phone: ['', Validators.required] 
    });
  }

  signUp() {
    if (this.signupForm.invalid) {
      alert("Please fill all the forms correctly."); 
      
    }
    else{

    this.signupService.signUp(this.signupForm.value).subscribe(
      res => {
        alert("Sign Up Successful");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      err => {
        alert("Sign up unsuccessful");
      }
    );
  }
  }
}




