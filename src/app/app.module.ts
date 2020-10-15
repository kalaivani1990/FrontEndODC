import { NgModule } from '@angular/core';
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
        AlertComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };