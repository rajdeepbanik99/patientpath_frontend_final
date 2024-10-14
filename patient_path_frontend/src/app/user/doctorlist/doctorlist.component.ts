
import { Component, OnInit } from '@angular/core';
  import { DoctorlistService } from '../../services/doctorlist.service';  

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
  doctors: any[] = []; 
  constructor(private doctorService: DoctorlistService) {}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((data: any[]) => {
      this.doctors = data;
    });
  }
}

