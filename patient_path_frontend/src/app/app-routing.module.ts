import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



import { UserpageComponent } from './user/userpage/userpage.component';
import { BookComponent } from './user/book/book.component';

import { DoctorlistComponent } from './user/doctorlist/doctorlist.component';
import { HomeComponent } from './user/home/home.component';
import { MyaccountComponent } from './user/myaccount/myaccount.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyOrdersComponent } from './user/myorders/myorders.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { TestdetailsComponent } from './admin/testdetails/testdetails.component';
import { AllorderComponent } from './admin/allorder/allorder.component';
import { AccountComponent } from './admin/account/account.component';
import { DoctorlistadminComponent } from './admin/doctorlistadmin/doctorlistadmin.component';

const routes: Routes = [
  // {path:'',redirectTo:'/userpage',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'home',component:HomeComponent},
  {path:'book',component:BookComponent},
  {path:'doctorlist',component:DoctorlistComponent},
  {path:'myaccount',component:MyaccountComponent},
  {path:'about',component:AboutComponent},
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },

  {
     path:'login',component:LoginComponent
  },
  
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
     path:'myorders',component:MyOrdersComponent
  },
 
  // {path:'',component:AppComponent},
  { path: 'adminpage', component: AdminpageComponent },
  {path:'testdetails',component:TestdetailsComponent},

  {path:'allorder',component:AllorderComponent},
  {path:'account',component:AccountComponent},
  {path:'doctorlistadmin',component:DoctorlistadminComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
