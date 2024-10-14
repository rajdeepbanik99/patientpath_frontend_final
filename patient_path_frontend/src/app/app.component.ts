import { Component, Inject, Injectable, ɵɵqueryRefresh } from '@angular/core';
import { BookComponent } from './user/book/book.component';
// import { DialogRef } from '@angular/cdk/dialog';
import {MatDialogModule} from '@angular/material/dialog';
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
  constructor(
  // private _dialog:MatDialogModule
  ) {
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

  public openBookap(){

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
import { MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';






