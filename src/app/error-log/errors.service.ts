import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  private readonly URL_BASE = `${environment.apiURL}/errors`;
  private errors = new Subject<any>();
  public $errors = this.errors.asObservable();
  constructor(private http: HttpClient) {}
  /**
   *
   * @description Gets all errors from the database
   */
  getAllErrors(): void {
    this.http.get<APIResponse>(this.URL_BASE).subscribe((res: APIResponse) => {
      this.errors.next(res.response.results);
    });
  }
}
