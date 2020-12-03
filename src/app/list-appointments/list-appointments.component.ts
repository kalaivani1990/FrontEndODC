import { OnInit, Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AppointInfo } from "@/_models/appointment.info";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { AccountService } from "@/_services/account.services";
import { Appointment } from "@/_models/appointment.model";
const styles = './list-appointments.component.less';

@Component({
selector: 'list-appointments',
templateUrl: './list-appointments.component.html',
styleUrls: [styles]
 })
export class ListAppointmentsComponent implements OnInit {

    listAppointment:AppointInfo[] = [];
    appointments:Appointment[] = [];
    userName:string;
    protected ngUnsubscribe: Subject<void> = new Subject<void>();
    constructor(private router: Router,private route: ActivatedRoute,
        private accountService: AccountService) {

    }
    
ngOnInit(){

    this.route.params.pipe(takeUntil(this.ngUnsubscribe),
    map((params:Params)=> params['userName'])).subscribe((value)=>{
            this.userName = value;
            this.accountService.getAllAppointments(this.userName).subscribe((data)=>{
                this.appointments = JSON.parse(JSON.stringify(data));
                for(let i=0; i<this.appointments.length;i++) {
                    this.listAppointment[i] = new AppointInfo();
                    this.listAppointment[i].fullname = this.appointments[i].patientName;
                    this.listAppointment[i].doa = this.appointments[i].dateofappointment;
                    this.listAppointment[i].time = this.appointments[i].dateofappointment;
                    this.listAppointment[i].problems = this.appointments[i].problems;
                    this.listAppointment[i].status = this.appointments[i].status;
                }
            });
    });

}


}