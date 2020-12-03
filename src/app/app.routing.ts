import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-the-apponitment/book-the-appointment.component';
import { EditConsultantProfileComponent } from './editConsultant/editConsultantProfile.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { RegisterPatientComponent } from './registerPatient/registerPatient.component';
import { EditPatientProfileComponent } from './editPatient/editPatient.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'edit', component: EditConsultantProfileComponent},
    { path: 'bookTheAppointment/:doctorName/:consultantName', component: BookAppointmentComponent },
    { path: 'doctorsList/:consultantName', component: ListDoctorsComponent },
    { path: 'appointment/:userName', component: ListAppointmentsComponent },
    { path: 'patientHistory', component: PatientHistoryComponent },
    { path: 'editPatient', component: EditPatientProfileComponent},
    { path: 'registerPatient', component: RegisterPatientComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);