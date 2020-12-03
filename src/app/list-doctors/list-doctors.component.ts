import { OnInit, Component } from "@angular/core";
import { DoctorInfo } from "@/_models/doctor.info";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AccountService } from "@/_services/account.services";
import { Doctor } from "@/_models/doctor.model";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
const styles = './list-doctors.component.less';

@Component({
selector: 'list-doctors',
templateUrl: './list-doctors.component.html',
styleUrls: [styles]
 })
export class ListDoctorsComponent implements OnInit {

    listDoctors:DoctorInfo[] = [];
    doctors:Doctor[] = [];
    doctorName:string;
    consultantName:string;
    protected ngUnsubscribe: Subject<void> = new Subject<void>();
    constructor(private router: Router, private accountService: AccountService,private route: ActivatedRoute) {
        this.route.params.pipe(takeUntil(this.ngUnsubscribe),
        map((params:Params)=> params['consultantName'])).subscribe((value)=>{
                this.consultantName = value;
        });
    }
    
ngOnInit(){


    this.accountService.getAllDoctors().subscribe((data)=>{
        this.doctors = JSON.parse(JSON.stringify(data));

        for(let i=0;i<this.doctors.length;i++) {
            this.listDoctors[i] = new DoctorInfo();
            this.listDoctors[i].fullname = this.doctors[i].firstName + " "+this.doctors[i].lastName;
            this.listDoctors[i].dob = this.doctors[i].dateofbirth;
            this.listDoctors[i].address = this.doctors[i].city + ", "+this.doctors[i].pin + ", Contact : "+this.doctors[i].phonenumber;
            this.listDoctors[i].availablity = true;
            this.listDoctors[i].qualification = this.doctors[i].qualification;
            this.listDoctors[i].speciality = this.doctors[i].speciality;
            this.listDoctors[i].userName = this.doctors[i].userName;
        }
    });
}
bookTheAppointment(data:DoctorInfo) {
   this.doctorName = data.userName;
    this.router.navigate(['/bookTheAppointment/' + this.doctorName+'/'+this.consultantName]);
}
}