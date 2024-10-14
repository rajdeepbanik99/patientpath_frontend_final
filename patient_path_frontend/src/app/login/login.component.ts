import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private __applogin: AppComponent,
    private _snackbar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Added email validation
      password: ['', Validators.required]
    });
  }

  logIn() {
    if (this.loginForm.invalid) {
      this._snackbar.open("Please fill in all fields correctly.", "Close", {
        duration: 4000
      });
      return;
    }

    const credentials = this.loginForm.value;

    this.loginService.login(credentials).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem("useremail", this.loginForm.value.email);
        this.__applogin.loginactive();
        this._snackbar.open("Login successful!", "Close", {
          duration: 4000
        });
        localStorage.setItem("useremail", this.loginForm.value.email);
        this.__applogin.loginactive();
        this.router.navigate(['home']);
      },
      error: (err) => {
        this._snackbar.open("Login failed. Please try again.", "Close", {
          duration: 4000
        });
      }
    });
  }
}
