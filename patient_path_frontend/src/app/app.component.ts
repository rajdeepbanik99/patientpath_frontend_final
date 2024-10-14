import { Component, ɵɵqueryRefresh } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patient_path_frountend';
  public useractive: boolean = false;

  public adminactive: boolean = false;

  //emailfound:any= localStorage.getItem("useremail")
  constructor() {
    // Check if user email exists in local storage
    this.loginactive();
    this.adminloginactive();

  }

  public loginactive() {
    if (localStorage.getItem("useremail")?.length != 0) {
      this.useractive = true // Set to true if email is found
      console.log(this.useractive)
    }






  }



  public adminloginactive() {
    if (localStorage.getItem("adminemail")?.length != 0) {
      this.adminactive = true; // Set to true if email is found
      console.log(this.adminactive)
    }






  }


  public logout() {
    localStorage.setItem('useremail', "");
    if (localStorage.getItem("useremail")?.length == 0) {
      this.useractive = false;

    }
  }

  public adminlogout() {
    localStorage.setItem('adminemail', "");
    if (localStorage.getItem("adminemail")?.length == 0) {
      this.adminactive = false;

    }
  }





}






