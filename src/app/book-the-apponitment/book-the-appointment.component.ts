import { Appointment } from "@/_models/appointment.model";
import { AccountService } from "@/_services/account.services";
import { OnInit, Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
const styles = './book-the-appointment.component.css';

@Component({
selector: 'book-the-appointment',
templateUrl: './book-the-appointment.component.html',
styleUrls: [styles]
 })
export class BookAppointmentComponent implements OnInit {
    bookTheAppointmentForm: FormGroup;
    successflag:boolean;
    successmessage:string;
    protected ngUnsubscribe: Subject<void> = new Subject<void>();
    constructor(private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder,
        private accountService: AccountService) {

    }

    doctorName : string;
    consultantName:string;
ngOnInit(){

    this.bookTheAppointmentForm = this.formBuilder.group({
        appointmentDate: ['', Validators.required],
        problems: ['', Validators.required]
    });

    this.route.params.pipe(takeUntil(this.ngUnsubscribe),
    map((params:Params)=> params['doctorName'])).subscribe((value)=>{
            this.doctorName = value;
    });
    this.route.params.pipe(takeUntil(this.ngUnsubscribe),
    map((params:Params)=> params['consultantName'])).subscribe((value)=>{
            this.consultantName = value;
    });
}
onSubmit() {
    let appointment = new Appointment();
    appointment.dateofappointment = this.bookTheAppointmentForm.value.appointmentDate;
    appointment.doctorName = this.doctorName;
    appointment.patientName = this.consultantName;
    appointment.problems = this.bookTheAppointmentForm.value.problems;
    appointment.status = "OPEN";
    this.accountService.createAppointment(appointment).subscribe((data)=>{
        this.successflag = true;
        this.successmessage = "Appoitment Booked successfully";
        setTimeout (() => {
           this.successflag = false;
           this.successmessage = "";
         }, 5000);
    })
}
}