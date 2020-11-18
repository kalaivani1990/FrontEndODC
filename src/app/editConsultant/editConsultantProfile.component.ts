import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService, AuthenticationService } from '@/_services';
const styles = './editConsultantProfile.component.css';

@Component({ templateUrl: 'editConsultantProfile.component.html',styleUrls: [styles] })
export class EditConsultantProfileComponent implements OnInit {
    editConsultantprofileForm: FormGroup;
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
        this.editConsultantprofileForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateofbirth: ['', Validators.required],
            gender: ['', Validators.required],
            Phonenumber: ['', [Validators.required, Validators.required]],
            city: ['', Validators.required],
            pin: ['', Validators.required,Validators.minLength(6)],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            speciality: ['', Validators.required],
            qualification: ['', Validators.required],
            registerationdetail: ['', Validators.required],
            experience: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.editConsultantprofileForm.controls; }

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
