import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ISummaryItem } from '../interfaces/summaryItem';

@Injectable({
    providedIn: 'root'
})
export class SummaryService {

    private apiUrl = 'api/summary/summaryitems.json';

    constructor(private http: HttpClient) {        
    }

    getSummaryItems(): Observable<ISummaryItem[]> {
        return this.http.get<ISummaryItem[]>(this.apiUrl).pipe(
            tap(data => console.log(data)),
            catchError(this.handlerError)
        )
    }

    handlerError(err: HttpErrorResponse) {
        console.log(err.message);    
        return throwError(err.message);
    }

}