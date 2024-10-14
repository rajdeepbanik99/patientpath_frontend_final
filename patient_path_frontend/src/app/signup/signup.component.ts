



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router,
    private _snackbar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
     
      password: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      phonenumber: ['', Validators.required]
    });
  }

  signUp() {
    if (this.signupForm.invalid) {
      this._snackbar.open("Enter ythe fields please", "close", { duration: 4000 })

    }
    else {

      this.signupService.signUp(this.signupForm.value).subscribe(
        res => {
          // alert("Sign Up Successful");
          this._snackbar.open("sign up sucess", "close", { duration: 4000 })
        
          this.router.navigate(['login']);
        },
        err => {
          this._snackbar.open("sign up fail", "close", { duration: 4000 })
        }
      );
    }
  }
}




