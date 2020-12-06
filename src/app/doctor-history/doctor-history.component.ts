import { Appointment } from "@/_models/appointment.model";
import { HistoryData } from "@/_models/history.model";
import { User } from "@/_models/user";
import { AccountService } from "@/_services/account.services";
import { AuthenticationService } from "@/_services/authentication.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

const styles = './doctor-history.component.css';
@Component({
    selector: 'doctor-history',
    templateUrl: './doctor-history.component.html',
    styleUrls: [styles]
     })
    export class DoctorHistoryComponent implements OnInit {
        createHistoryForm: FormGroup;
        loading = false;
        currentUser: User;
        successflag:boolean;
        successmessage:string;

        constructor( private formBuilder: FormBuilder, private authenticationService: AuthenticationService,
            private accountService: AccountService) {
            this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        }
        ngOnInit() {
            this.createHistoryForm = this.formBuilder.group({
                patientName: ['', Validators.required],
                consultationDate: ['', Validators.required],
                problems: ['', Validators.required],
                suggestions: ['', Validators.required],
                medicines: ['', [Validators.required, Validators.required]],
                nextVisit: ['', Validators.required],
                amountPaid: ['', Validators.required]
            });
        }
        onSubmit() {

            let history = new HistoryData();
            history.patientName = this.createHistoryForm.value.patientName;
            history.doctorName =this.currentUser.username;
            history.consultationDate = this.createHistoryForm.value.consultationDate;
            history.problems = this.createHistoryForm.value.problems;
            history.suggestions = this.createHistoryForm.value.suggestions;
            history.medicines = this.createHistoryForm.value.medicines;
            history.nextVisit = this.createHistoryForm.value.nextVisit;
            history.amountPaid = this.createHistoryForm.value.amountPaid;

            this.accountService.createHistory(history).subscribe((data)=>{

                let appointment = new Appointment();
                appointment.patientName = this.createHistoryForm.value.patientName;
                appointment.doctorName = this.currentUser.username;
                appointment.dateofappointment = this.createHistoryForm.value.consultationDate;
                appointment.problems = this.createHistoryForm.value.problems;
                appointment.status = "CLOSED";
                this.accountService.createAppointment(appointment).subscribe((data)=> {
                    this.successflag = true;
                    this.successmessage = "Created History successfully";
                    setTimeout (() => {
                       this.successflag = false;
                       this.successmessage = "";
                     }, 5000);
                });
            });

        }
    }