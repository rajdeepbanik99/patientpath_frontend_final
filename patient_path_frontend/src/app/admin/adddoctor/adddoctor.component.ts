import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
// import { ServiceService } from '../../apiservice/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceService } from '../../apiservice/service.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrl: './adddoctor.component.css'
})
export class AdddoctorComponent implements OnInit{
  newData:FormGroup;
  constructor(private _fb:FormBuilder,private dialogRef:DialogRef<AdddoctorComponent>,private apiService:ServiceService,private snackbar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: any){
    this.newData=_fb.group({
      doctorName:['',Validators.required],
      doctorSpilist:['',Validators.required], 
      hospitalName:['',Validators.required],
      doctor_avilable:['',Validators.required],
      exprence:['',Validators.required],
      education:['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.newData.patchValue(this.data);
    console.log(this.data.id+" is the id");
  }
  onSave(){
    if(this.data==null){
        console.log(this.newData.value);
      this.apiService.addDoctor(this.newData.value).subscribe(
      (response)=>{
        this.snackbar.open("added doctor succesfully" ,"done",{
          duration:2000
        })
      },(error)=>{
        this.snackbar.open("unsuccessfully adding new doctor","close",{
          duration:3000
        })
      }
    )
    this.dialogRef.close();
    }else{
      this.apiService.updateDoctor(this.data.id,this.newData.value).subscribe(
        (response)=>{
          this.snackbar.open("update doctor succesfully" ,"done",{
            duration:2000
          })
        },(error)=>{
          this.snackbar.open("unsuccessfully updating new doctor","close",{
            duration:3000
          })
        }
      )
      this.dialogRef.close();
    }
  }
 
  close(){
    this.dialogRef.close();
  }
}