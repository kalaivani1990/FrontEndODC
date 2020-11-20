import { OnInit, Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppointInfo } from "@/_models/appointment.info";
const styles = './list-appointments.component.less';

@Component({
selector: 'list-appointments',
templateUrl: './list-appointments.component.html',
styleUrls: [styles]
 })
export class ListAppointmentsComponent implements OnInit {

    listAppointment:AppointInfo[] = [];
    constructor(private router: Router) {

    }
    
ngOnInit(){

    this.listAppointment[0] = new AppointInfo();
    this.listAppointment[0].fullname = "S.John";
    this.listAppointment[0].doa = "20-11-2020";
    this.listAppointment[0].time = "10AM";
 

    this.listAppointment[1] = new AppointInfo();
    this.listAppointment[1].fullname = "C.Dhanu";
    this.listAppointment[1].doa = "25-11-2020";
    this.listAppointment[1].time = "12PM";

    this.listAppointment[2] = new AppointInfo();
    this.listAppointment[2].fullname = "M.Marc";
    this.listAppointment[2].doa = "27-11-2020";
    this.listAppointment[2].time = "1PM";
  


}


}