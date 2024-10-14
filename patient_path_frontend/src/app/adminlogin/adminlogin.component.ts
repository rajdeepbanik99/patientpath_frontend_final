




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AdminLoginService } from '../services/adminlogin.service'; 
import  {AppComponent } from '../app.component'

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
    private __applogin:AppComponent
  ) {}

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

    this.adminLoginService.getAdmins().subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.adminForm.value.email && a.password === this.adminForm.value.password;
      });

      if (user) {
        alert("Admin Login Successful");
        //this.adminForm.reset();
        localStorage.setItem("useremail", this.adminForm.value.email);
        console.log(localStorage.getItem("useremail"))
                //this.router.navigate(['home']);
             this.__applogin.adminloginactive()
        
        this.router.navigate(['adminpage']); 
      } else {
        alert("Invalid Admin Credentials");
      }
    }, err => {
      alert("Server error"); 
    });
  }
}
