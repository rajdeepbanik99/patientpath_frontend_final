import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { UserpageComponent } from './user/userpage/userpage.component';
import { MatMenuModule } from '@angular/material/menu';
import { DoctorlistComponent } from './user/doctorlist/doctorlist.component';
import { BookComponent } from './user/book/book.component';
import { HomeComponent } from './user/home/home.component';
import { MyaccountComponent } from './user/myaccount/myaccount.component';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MyOrdersComponent } from './user/myorders/myorders.component';
import { AccountComponent } from './admin/account/account.component';
import { AdddoctorComponent } from './admin/adddoctor/adddoctor.component';
import { AddtestComponent } from './admin/addtest/addtest.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { AllorderComponent } from './admin/allorder/allorder.component';
import { TestdetailsComponent } from './admin/testdetails/testdetails.component';
import { DoctorlistadminComponent } from './admin/doctorlistadmin/doctorlistadmin.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminloginComponent,
   
    UserpageComponent,
    DoctorlistComponent,
    BookComponent,
    HomeComponent,
    MyaccountComponent,
    AboutComponent,
    NavbarComponent,
     MyOrdersComponent,
     AccountComponent,
     AdddoctorComponent,
     AddtestComponent,
     AdminpageComponent,
     AllorderComponent,
     TestdetailsComponent,
     DoctorlistadminComponent,
     

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    HttpClientModule,
    MatPaginatorModule,
    
   
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
   
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
     MatLabel,
     MatInputModule
   

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
