import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService, AuthenticationService } from '@/_services';


@Component({ templateUrl: 'editPatient.component.html'})
export class EditPatientProfileComponent implements OnInit {
    editPatientprofileForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
  //      private authenticationService: AuthenticationService
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
    //     if (this.authenticationService.currentUserValue) {
    //         this.router.navigate(['/']);
    //     }
    }

    ngOnInit() {
        this.editPatientprofileForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateofbirth: ['', Validators.required],
            gender: ['', Validators.required],
            Phonenumber: ['', [Validators.required, Validators.required]],
            city: ['', Validators.required],
            pin: ['', Validators.required,Validators.minLength(6)],
            email: ['', Validators.required]

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.editPatientprofileForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        // this.alertService.clear();

        // // stop here if form is invalid
        // if (this.editConsultantprofileForm.invalid) {
        //     return;
        // }

        // this.loading = true;
        // this.userService.register(this.editConsultantprofileForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
                    
        //             this.alertService.success('updated successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
  //              });
    }
}
