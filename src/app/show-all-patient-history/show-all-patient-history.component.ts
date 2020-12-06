import { OnInit, Component, ElementRef, ViewChild } from "@angular/core";
import { PatientHistory } from "@/_models/patient-history";
import { AccountService } from "@/_services/account.services";
import { HistoryData } from "@/_models/history.model";
const styles = './show-all-patient-history.component.css';

@Component({
selector: 'show-all-patient-history',
templateUrl: './show-all-patient-history.component.html',
styleUrls: [styles]
 })
export class ShowAllPatientHistoryComponent implements OnInit {

    constructor(private accountService:AccountService) {

    }
    history : HistoryData[]=[];
    patientHistoryList:PatientHistory[] = [];
    ngOnInit(){

       this.accountService.showAllPatientHistory().subscribe((data)=>{
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