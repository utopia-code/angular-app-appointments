import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { ListAppointmentComponent } from './components/list-appointment/list-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAppointmentComponent,
    ListAppointmentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
