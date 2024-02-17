import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrl: './list-appointment.component.css'
})
export class ListAppointmentComponent {
  
  @Input() list: any;
  @Output() deleteAppointment = new EventEmitter<number>();


  deleteCard(index: number) {
    this.deleteAppointment.emit(index);
  }
  
}
