import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService, AuthenticationService } from '@/_services';
import { AccountService } from '@/_services/account.services';
import { Doctor } from '@/_models/doctor.model';
import { User } from '@/_models/user';
import { ListDoctorsComponent } from '@/list-doctors/list-doctors.component';
const styles = './editConsultantProfile.component.css';

@Component({ templateUrl: 'editConsultantProfile.component.html',styleUrls: [styles] })
export class EditConsultantProfileComponent implements OnInit {
    editConsultantprofileForm: FormGroup;
    loading = false;
    submitted = false;
    doctor:Doctor;
    successflag:boolean;
    successmessage:string;
    currentUser: User;

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
        this.editConsultantprofileForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            dateofbirth: ['', Validators.required],
            gender: ['', Validators.required],
            Phonenumber: ['', [Validators.required, Validators.required]],
            city: ['', Validators.required],
            pin: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            speciality: ['', Validators.required],
            qualification: ['', Validators.required],
            registerationdetail: ['', Validators.required],
            experience: ['', Validators.required]
        });

        if(this.currentUser.username != null) {
            this.accountService.getDoctor(this.currentUser.username).subscribe((data)=>{
               this.doctor = JSON.parse(JSON.stringify(data));
              
               if(this.doctor!=null) {
                   this.editConsultantprofileForm.controls['firstName'].setValue(this.doctor.firstName);
                   this.editConsultantprofileForm.controls['lastName'].setValue(this.doctor.lastName);
                   this.editConsultantprofileForm.controls['dateofbirth'].setValue(this.doctor.dateofbirth);
                   this.editConsultantprofileForm.controls['gender'].setValue(this.doctor.gender);
                   this.editConsultantprofileForm.controls['Phonenumber'].setValue(this.doctor.phonenumber);
                   this.editConsultantprofileForm.controls['city'].setValue(this.doctor.city);
                   this.editConsultantprofileForm.controls['pin'].setValue(this.doctor.pin);
                   this.editConsultantprofileForm.controls['email'].setValue(this.doctor.email);
                   this.editConsultantprofileForm.controls['speciality'].setValue(this.doctor.speciality);
                   this.editConsultantprofileForm.controls['qualification'].setValue(this.doctor.qualification);
                   this.editConsultantprofileForm.controls['registerationdetail'].setValue(this.doctor.registrationDetail);
                   this.editConsultantprofileForm.controls['experience'].setValue(this.doctor.experience);
                  
              
               this.currentUser.username = this.doctor.userName;
               
               }
            });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.editConsultantprofileForm.controls; }

    onSubmit() {
        this.submitted = true;

        let doctor = new Doctor();
        doctor.firstName = this.editConsultantprofileForm.value.firstName;
        doctor.lastName = this.editConsultantprofileForm.value.lastName;
        doctor.dateofbirth = this.editConsultantprofileForm.value.dateofbirth;
        doctor.gender = this.editConsultantprofileForm.value.gender;
        doctor.phonenumber = this.editConsultantprofileForm.value.Phonenumber;
        doctor.city = this.editConsultantprofileForm.value.city;
        doctor.pin = this.editConsultantprofileForm.value.pin;
        doctor.email = this.editConsultantprofileForm.value.email;
        doctor.qualification = this.editConsultantprofileForm.value.qualification;
        doctor.registrationDetail = this.editConsultantprofileForm.value.registerationdetail;
        doctor.speciality = this.editConsultantprofileForm.value.speciality;
        doctor.userName = this.currentUser.username;
        doctor.experience = this.editConsultantprofileForm.value.experience;

        this.accountService.updateDoctorsProfile(doctor).subscribe((data)=>{
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
