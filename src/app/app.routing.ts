import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentComponent } from './book-the-apponitment/book-the-appointment.component';
import { EditConsultantProfileComponent } from './editConsultant/editConsultantProfile.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'edit', component: EditConsultantProfileComponent},
    { path: 'bookTheAppointment', component: BookAppointmentComponent },
    { path: 'doctorsList', component: ListDoctorsComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);