import { Component, OnInit } from '@angular/core';
// import { ServiceService } from '../../apiservice/service.service';
 import { ServiceService } from '../../apiservice/service.service';

@Component({
  selector: 'app-allorder',
  templateUrl: './allorder.component.html',
  styleUrl: './allorder.component.css'
})
export class AllorderComponent implements OnInit{
  allorder:any[]=[];
  constructor(private apiService:ServiceService){

  }
  ngOnInit(): void {
   this.apiService.getAllOrder().subscribe(
    (response)=>{
      this.allorder=response;
      console.log(this.allorder);
    }
   )
  }
  

}