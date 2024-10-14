


import { Component, OnInit } from '@angular/core';       
import { MyOrderService } from '../../services/my-order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyOrdersComponent implements OnInit {
  appointments: any[] = [];
  selectedAppointment: any; 
  isEditing: boolean = false; 

 
  hospitals = ['Hospital 1', 'Hospital 2', 'Hospital 3'];
  doctors = ['General Practitioner', 'Specialist', 'Surgeon'];
  specialists = ['Cardiologist', 'Dermatologist', 'Neurologist'];

  constructor(private myOrderService: MyOrderService) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.myOrderService.getAppointments().subscribe((appointments: any[]) => {
      this.appointments = appointments;
    });
  }

  openEditModal(appointment: any): void {
    this.selectedAppointment = { ...appointment }; 
    this.isEditing = true;
  }

  updateAppointment(): void {
    this.myOrderService.updateAppointment(this.selectedAppointment).subscribe(() => {
      this.loadAppointments(); 
      this.isEditing = false; 
      this.selectedAppointment = null; 
    });
  }

  deleteAppointment(appointmentId: string): void {
    this.myOrderService.deleteAppointment(appointmentId).subscribe(() => {
      this.appointments = this.appointments.filter(a => a.id !== appointmentId);
    });
  }
}


