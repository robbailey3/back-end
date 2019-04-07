import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ErrorLoggingService {
  private readonly URL = '';
  constructor(private http: HttpClient) {}

  postJavascriptError($error): Observable<any> {
    return this.http.post<APIResponse>(this.URL, $error).pipe(
      retry(4),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something went wrong');
  }
}
