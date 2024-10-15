


import { Component, OnInit } from '@angular/core';
import { MyOrderService } from '../../services/my-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-my-orders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyOrdersComponent implements OnInit {
  appointments: any[] = [];
  selectedAppointment: any;
  isEditing: boolean = false;


  hospitals = [];
  doctors = [];
  specialists = [];

  constructor(private myOrderService: MyOrderService, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.myOrderService.getAppointments().subscribe({
      next: (res: any) => {
        this.appointments = res;
        this.hospitals = res.hospitalNames;
        this.doctors = res.doctorName;
        this.specialists = res.specialist;

      }, error: (err) => {
        this._snackbar.open("updatenot sucess" + err, "close", { duration: 3000 })
      }
    });
  }

  openEditModal(appointment: any): void {
    this.selectedAppointment = { ...appointment };
    this.isEditing = true;
  }

  updateAppointment(id: any): void {

  }

  deleteAppointment(appointmentId: any): void {
    this.myOrderService.deleteAppointment(appointmentId).subscribe({
      next: (res: any) => {
        this._snackbar.open("Deletion sucess", "close", { duration: 3000 })
      }, error: (err) => {
        this._snackbar.open("Deletion sucess", "close", { duration: 3000 })
      }
    });
  }
}


