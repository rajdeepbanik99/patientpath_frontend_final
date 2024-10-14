// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-addtest',
//   templateUrl: './addtest.component.html',
//   styleUrl: './addtest.component.css'
// })
// export class AddtestComponent {

// }


import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ServiceService } from '../../apiservice/service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ServiceService } from '../../apiservice/service.service';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrl: './addtest.component.css'
})
export class AddtestComponent implements OnInit {
    newTest:FormGroup;
    constructor(private _fb:FormBuilder,private dialogRef:DialogRef<AddtestComponent>,private apiService:ServiceService,private snackbar:MatSnackBar,@Inject(MAT_DIALOG_DATA) public data: any){
      this.newTest=_fb.group({
        testName:'',
        steps:''
      });
    }
  ngOnInit(): void {
    this.newTest.patchValue(this.data);
  }
    onSave(){
      console.log(this.newTest.value);
      if(this.data==null){
        this.apiService.addTest(this.newTest.value).subscribe(
          (response)=>{
            this.snackbar.open("added test details succesfully" ,"done",{
              duration:2000
            })
          },(error)=>{
            this.snackbar.open("unsuccessfully adding new test details","close",{
              duration:3000
            })
          }
        )
        this.dialogRef.close();
      }else{
        this.apiService.updateTest(this.data.id,this.newTest.value).subscribe(
          (response)=>{
            this.snackbar.open("update test details succesfully" ,"done",{
              duration:2000
            })
          },(error)=>{
            this.snackbar.open("unsuccessfully update the test details","close",{
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
