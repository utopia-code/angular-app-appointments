import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  name = '';
  date = '';
  time = '';
  symptoms = '';

  incorrectForm = false;

  @Output() newAppointment = new EventEmitter<any>();

  createAppointment() {
    if (this.name == '' || this.date == '' || this.time == '' || this.symptoms == '') {
      this.incorrectForm = true;
      return;
    }
    this.incorrectForm = false;

    const APPOINTMENT = {
      name: this.name,
      date: this.date,
      time: this.time,
      symptoms: this.symptoms
    }

    this.newAppointment.emit(APPOINTMENT)
    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.date = '';
    this.time = '';
    this.symptoms = '';
  }
}
