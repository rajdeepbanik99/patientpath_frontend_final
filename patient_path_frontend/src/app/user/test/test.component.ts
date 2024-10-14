import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../apiservice/service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  test:any[]=[];
  constructor(private apiService:ServiceService){
    
  }
  ngOnInit(): void {
    this.apiService.getAllTest().subscribe(
      (response)=>{
        this.test=response;
        console.log(this.test)
      },
      (error)=>{
        console.log("error");
      }
      )
  }
}
