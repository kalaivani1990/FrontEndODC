﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { EditConsultantProfileComponent } from './editConsultant/editConsultantProfile.component';
import { BookAppointmentComponent } from './book-the-apponitment/book-the-appointment.component';
import { CalendarModule } from './calendar/calendar.module';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { RegisterPatientComponent } from './registerPatient/registerPatient.component';
import { EditPatientProfileComponent } from './editPatient/editPatient.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { AccountService } from './_services/account.services';
import { API_ENDPOINTS, API_ENDPOINTS_VALUES } from './configure/api-endpoints';
import { DoctorHistoryComponent } from './doctor-history/doctor-history.component';
import { ShowAllPatientHistoryComponent } from './show-all-patient-history/show-all-patient-history.component';



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        CalendarModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        EditConsultantProfileComponent,
        BookAppointmentComponent,
        AlertComponent,
        ListDoctorsComponent,
        ListAppointmentsComponent,
        PatientHistoryComponent,
        EditPatientProfileComponent,
        RegisterPatientComponent,
        DoctorHistoryComponent,
        ShowAllPatientHistoryComponent
    ],
    providers: [
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        AccountService,
        {provide: API_ENDPOINTS, useValue: API_ENDPOINTS_VALUES},
        // provider used to create fake backend
       fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };