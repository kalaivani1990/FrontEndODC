import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService, AuthenticationService } from '@/_services';
import { AccountService } from '@/_services/account.services';
import { Consultant } from '@/_models/consultant.model';
import { User } from '@/_models/user';


@Component({ templateUrl: 'editPatient.component.html'})
export class EditPatientProfileComponent implements OnInit {
    editPatientprofileForm: FormGroup;
    loading = false;
    submitted = false;
    currentUser: User;
    successmessage:string;
    successflag:boolean;
    consultant: Consultant;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
  //      private authenticationService: AuthenticationService
        private userService: UserService,
        private alertService: AlertService,
        private accountService: AccountService,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
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
            pin: ['', Validators.required],
            email: ['', Validators.required]

        });

        if(this.currentUser.username != null) {
            this.accountService.getConsultant(this.currentUser.username).subscribe((data)=>{
               this.consultant = JSON.parse(JSON.stringify(data));
              
               if(this.consultant!=null) {
                   this.editPatientprofileForm.controls['firstName'].setValue(this.consultant.firstName);
                   this.editPatientprofileForm.controls['lastName'].setValue(this.consultant.lastName);
                   this.editPatientprofileForm.controls['dateofbirth'].setValue(this.consultant.dateofBirth);
                   this.editPatientprofileForm.controls['gender'].setValue(this.consultant.gender);
                   this.editPatientprofileForm.controls['Phonenumber'].setValue(this.consultant.phoneNumber);
                   this.editPatientprofileForm.controls['city'].setValue(this.consultant.city);
                   this.editPatientprofileForm.controls['pin'].setValue(this.consultant.pin);
                   this.editPatientprofileForm.controls['email'].setValue(this.consultant.email);
                  
              
               this.currentUser.username = this.consultant.userName;
               
               }
            });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.editPatientprofileForm.controls; }

    onSubmit() {
        this.submitted = true;

        let consultant = new Consultant();
        consultant.firstName = this.editPatientprofileForm.value.firstName;
        consultant.lastName = this.editPatientprofileForm.value.lastName;
        consultant.dateofBirth = this.editPatientprofileForm.value.dateofbirth;
        consultant.gender = this.editPatientprofileForm.value.gender;
        consultant.phoneNumber = this.editPatientprofileForm.value.Phonenumber;
        consultant.city = this.editPatientprofileForm.value.city;
        consultant.pin = this.editPatientprofileForm.value.pin;
        consultant.email = this.editPatientprofileForm.value.email;
        consultant.userName = this.currentUser.username;

        this.accountService.updateProfile(consultant).subscribe((data)=>{
            this.successflag = true;
            this.successmessage = "Updated information successfully";
            setTimeout (() => {
               this.successflag = false;
               this.successmessage = "";
             }, 5000);
        });
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
