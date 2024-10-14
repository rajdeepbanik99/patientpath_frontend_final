import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { ServiceService } from '../../apiservice/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-doctorlistadmin',
  templateUrl: './doctorlistadmin.component.html',
  styleUrl: './doctorlistadmin.component.css'
})
export class DoctorlistadminComponent {
  doctorList: any[]=[];
  filteredDoctors: any[] = [...this.doctorList];
  constructor(private dialog:MatDialog,private apiService:ServiceService,private snackbar:MatSnackBar){
    
  }
  ngOnInit() {
    this.details();
    
  }

  details(){
    this.apiService.getAllDoctor().subscribe(
      (response)=>{
        console.log(response)
        this.doctorList=response;
        this.filteredDoctors=this.doctorList;
      },(error)=>{
        this.snackbar.open("unable to fetch details","close",{
          duration:3000 
        })
      }
    )
  }
  


  deleteDocter(d:any){
    // this.filteredDoctors = this.filteredDoctors.filter(test => test !== d);
    console.log(d);
    this.apiService.deleteDoctor(d.id).subscribe(
      (respone)=>{
        this.snackbar.open("deleted successfully","done",{
          duration:3000
        });
        this.details();
      },(error)=>{
        this.snackbar.open("unable to delete the data","close",{
          duration:3000
        });
      }
    )
  }

  editDocter(d:any){
    const dialogRef=this.dialog.open(AdddoctorComponent,{
      data:d
    });
  }

  
  applyFilter(event:any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredDoctors = this.doctorList.filter(doctor => 
      doctor.name.toLowerCase().includes(filterValue.trim().toLowerCase()) || 
      doctor.specialty.toLowerCase().includes(filterValue.trim().toLowerCase())
    );
    // const filterValue=(event.target as HTMLInputElement).value;
    //     this.filteredDoctors.filter=filterValue.trim().toLowerCase();
  }


  addDoctor(){
    const dialogRef=this.dialog.open(AdddoctorComponent);
    
  }
  newAdd(){
    this.dialog.open(AdddoctorComponent);
  }
}
