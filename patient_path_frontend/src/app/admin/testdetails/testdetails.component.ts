import { Component, OnInit } from '@angular/core';
import { AddtestComponent } from '../addtest/addtest.component';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ServiceService } from '../../apiservice/service.service';

@Component({
  selector: 'app-testdetails',
  templateUrl: './testdetails.component.html',
  styleUrl: './testdetails.component.css'
})
export class TestdetailsComponent implements OnInit{


  constructor(private dialog:MatDialog,private apiService:ServiceService,private snacksbar:MatSnackBar){

  }
  ngOnInit(): void {
    this.detailsTest();
  }
  testDetails: any[] = [];
  filteredDetails: any[] = [...this.testDetails];


  detailsTest(){
    this.apiService.getAllTest().subscribe(
      (response)=>{
        
        this.testDetails=response;
        console.log(this.testDetails)
        this.filteredDetails=this.testDetails
      },(error)=>{
        console.log(error);
          this.snacksbar.open("error in fetcing deatils","close",{
            duration:3000
          })
      }
    )
  }
  deleteTest(test: any) {
    // this.filteredDetails = this.filteredDetails.filter(test => test !== _t4);
    this.apiService.deleteTest(test.id).subscribe(
      (respone)=>{
        this.snacksbar.open("unable to delete","close",{
          duration:3000
        })
      },(error)=>{
        this.snacksbar.open("deleted sucessfully","done",{
          duration:3000
        })
      }
    )
    }
    editTest(data:any){
      const dialogRef=this.dialog.open(AddtestComponent,{
        data:data
      })
    }
    
  applyFilter(event:any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredDetails = this.testDetails.filter(test => 
      test.testName.toLowerCase().includes(filterValue.trim().toLowerCase()) 
    );
  }
  test(){
    const dialogRef=this.dialog.open(AddtestComponent);
    
    dialogRef.afterClosed();
    
  }
}