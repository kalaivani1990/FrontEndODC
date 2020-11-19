import { OnInit, Component } from "@angular/core";
import { DoctorInfo } from "@/_models/doctor.info";
import { Router } from "@angular/router";
const styles = './list-doctors.component.less';

@Component({
selector: 'list-doctors',
templateUrl: './list-doctors.component.html',
styleUrls: [styles]
 })
export class ListDoctorsComponent implements OnInit {

    listDoctors:DoctorInfo[] = [];
    constructor(private router: Router) {

    }
    
ngOnInit(){

    this.listDoctors[0] = new DoctorInfo();
    this.listDoctors[0].fullname = "Dr.Anne";
    this.listDoctors[0].dob = "09-08-1987";
    this.listDoctors[0].address = "cantadorstraße 31, Germany 40221";
    this.listDoctors[0].availablity = true;
    this.listDoctors[0].qualification = "MBBS., DGO.,";
    this.listDoctors[0].speciality = "Gynecologist";

    this.listDoctors[1] = new DoctorInfo();
    this.listDoctors[1].fullname = "Dr.Marc";
    this.listDoctors[1].dob = "07-06-1980";
    this.listDoctors[1].address = "kölnerstraße 381, Germany 40227";
    this.listDoctors[1].availablity = true;
    this.listDoctors[1].qualification = "MBBS., MD.,";
    this.listDoctors[1].speciality = "General Medicine";

    this.listDoctors[2] = new DoctorInfo();
    this.listDoctors[2].fullname = "Dr.Bhakit";
    this.listDoctors[2].dob = "15-04-1986";
    this.listDoctors[2].address = "oststraße 1, Germany 40229";
    this.listDoctors[2].availablity = true;
    this.listDoctors[2].qualification = "BDS., MDS.,";
    this.listDoctors[2].speciality = "Dentist";


}
bookTheAppointment() {
    this.router.navigate(['/bookTheAppointment']);
}
}