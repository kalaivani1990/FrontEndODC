import { OnInit, Component, ElementRef, ViewChild } from "@angular/core";
import { PatientHistory } from "@/_models/patient-history";
import { AccountService } from "@/_services/account.services";
import { HistoryData } from "@/_models/history.model";
import { AuthenticationService } from "@/_services/authentication.service";
import { User } from "@/_models/user";
const styles = './patient-history.component.css';

@Component({
selector: 'patient-history',
templateUrl: './patient-history.component.html',
styleUrls: [styles]
 })
export class PatientHistoryComponent implements OnInit {
    patientHistoryList:PatientHistory[] = [];
    history : HistoryData[]=[];
    currentUser: User;

    constructor(private accountService:AccountService,private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    
ngOnInit(){

    if(this.currentUser != null) {
    this.accountService.showPatientHistory(this.currentUser.username).subscribe((data)=>{
        this.history = JSON.parse(JSON.stringify(data));
        for(let i=0;i<this.history.length;i++) {
        this.patientHistoryList[i] = new PatientHistory();
        this.patientHistoryList[i].patientName = this.history[i].patientName;
        this.patientHistoryList[i].problems = this.history[i].problems;
        this.patientHistoryList[i].suggestions = this.history[i].suggestions;
        this.patientHistoryList[i].nextVisit = this.history[i].nextVisit;
        this.patientHistoryList[i].medicine = this.history[i].medicines;
        this.patientHistoryList[i].dateofVisit = this.history[i].consultationDate;
        this.patientHistoryList[i].amountPaid = this.history[i].amountPaid;
        }
       });
    }
    
}
downloadPdf(data:any) {
   
    let a: any;
    a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    let json = JSON.stringify(data),
      blob = new Blob([json], { type: "octet/stream" }),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = data.patientName+".txt";
    a.click();
    window.URL.revokeObjectURL(url);
      
}
}