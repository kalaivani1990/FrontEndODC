import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { User } from '@/_models';
import { Observable, throwError } from 'rxjs';
import { ApiEndpoints, API_ENDPOINTS } from '@/configure/api-endpoints';
import { catchError, map, share } from 'rxjs/operators';
import { Consultant } from '@/_models/consultant.model';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient, @Inject(API_ENDPOINTS) private apiEndpoints:ApiEndpoints) { }

    updateProfile(consultant:Consultant): Observable<any> {
       const url = this.apiEndpoints.UPDATE_PROFILE();
        return this.http.post(url,consultant);
    }

    getConsultant(username:string): Observable<any> {
        const url = this.apiEndpoints.GET_CONSULTANT(username);
        return this.http.get(url).pipe(share());
    }
}
