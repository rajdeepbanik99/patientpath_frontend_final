import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'patient_path_frountend';
 public  useractive:boolean=true;

 public  adminactive:boolean=true;

   //emailfound:any= localStorage.getItem("useremail")
   constructor() {
    // Check if user email exists in local storage
   
  }

   public loginactive(){
    if (localStorage.getItem("useremail")!=null) {
      this.useractive = false; // Set to true if email is found
      console.log(this.useractive)
    }

     



    
   }  



   public adminloginactive(){
    if (localStorage.getItem("useremail")!=null) {
      this.adminactive = false; // Set to true if email is found
      console.log(this.adminactive)
    }

     



    
   }


 public logout(){
  if(this.useractive == false){
this.useractive=true;
localStorage.setItem('useremail',"");
  }
 }
 
 public adminlogout(){
  if(this.adminactive == false){
    this.adminactive=true;
    localStorage.setItem('useremail',"");
      }
 }

 
 


 }


 



