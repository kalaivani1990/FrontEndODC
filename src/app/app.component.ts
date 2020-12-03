import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

import './_content/app.less';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit{
    currentUser: User;
    enableConsultant = false;
    enableDoctor = false;
    consultantName:string;
    protected ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {

        if(this.currentUser!=null) {

       
        if(this.currentUser.userType == "Consultant") {
            this.enableConsultant = true;

        } else if(this.currentUser.userType == "Doctor") {
            this.enableDoctor = true;
        }
    }
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    openDoctorsList() {
        this.router.navigate(['/doctorsList/'+this.currentUser.username]);
    }
    openAppointment() {
        this.router.navigate(['/appointment/'+this.currentUser.username]);
    }
}