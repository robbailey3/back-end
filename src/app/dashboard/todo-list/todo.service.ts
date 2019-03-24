import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse } from 'src/app/shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly URL_BASE = `${environment.apiURL}/todo`;
  constructor(private http: HttpClient) {}
  getTodos(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.URL_BASE);
  }
}
