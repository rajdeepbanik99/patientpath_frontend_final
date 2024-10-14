




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/adminlogin.service';
import { AppComponent } from '../app.component'
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminLoginService: AdminLoginService,
    private router: Router,
    private __applogin: AppComponent,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  logIn() {
    if (this.adminForm.invalid) {
      alert("Please fill in all fields.");
      return;
    }
    const credentials = this.adminForm.value;

    this.adminLoginService.loginadmin(credentials).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          localStorage.setItem("adminemail", this.adminForm.value.email);
          this.__applogin.adminloginactive();
          this._snackbar.open("Login successful!", "Close", {
            duration: 4000
          });
          localStorage.setItem("adminemail", this.adminForm.value.email);
          this.__applogin.adminloginactive();
          this.router.navigate(['home']);
        },
        error: (err) => {
          this._snackbar.open("Login failed. Please try again.", "Close", {
            duration: 4000
          });
        }
      }
    );

  }
}
