import { OnInit, Component, ElementRef, ViewChild } from "@angular/core";
import { PatientHistory } from "@/_models/patient-history";
const styles = './patient-history.component.css';

@Component({
selector: 'patient-history',
templateUrl: './patient-history.component.html',
styleUrls: [styles]
 })
export class PatientHistoryComponent implements OnInit {
    patientHistoryList:PatientHistory[] = [];

ngOnInit(){

    this.patientHistoryList[0] = new PatientHistory();
    this.patientHistoryList[0].patientName = "Mr.Daglier";
    this.patientHistoryList[0].problems = "Feeling fever from past 5 days and taking paracetamol from past 5 days. but not getting recoverd";
    this.patientHistoryList[0].suggestions = "Have to get blood test done and the patient should revisit";
    this.patientHistoryList[0].nextVisit = "once blood test report got it done.";
    this.patientHistoryList[0].medicine = "Take the same paracetamol";
    this.patientHistoryList[0].dateofVisit = "12-10-2020";
    this.patientHistoryList[0].amountPaid = "55 Euros";

    this.patientHistoryList[1] = new PatientHistory();
    this.patientHistoryList[1].patientName = "Mr.Diamentidis";
    this.patientHistoryList[1].problems = "Continuos cough over night from past 2 days";
    this.patientHistoryList[1].suggestions = "Take medicines suggested. Drink hot water with honey, pepper and turmeric mixed";
    this.patientHistoryList[1].nextVisit = "15-11-2020";
    this.patientHistoryList[1].medicine = "Robitussin Cough";
    this.patientHistoryList[1].dateofVisit = "13-11-2020";
    this.patientHistoryList[1].amountPaid = "40 Euros";
    
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