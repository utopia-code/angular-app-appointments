import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Appointments APP';
  
  listAppointments: any[] = [];

  addAppointment(appointment: any) {
    this.listAppointments.push(appointment)
  }

  onDeleteAppointment(index: number) {
    this.listAppointments.splice(index, 1);
  }
}
