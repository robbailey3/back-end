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
  changeTodoStatus(id: number, status: boolean): Observable<APIResponse> {
    return this.http.patch<APIResponse>(`${this.URL_BASE}/${id}`, status);
  }
  newTodo(data): Observable<APIResponse> {
    return this.http.post<APIResponse>(`${this.URL_BASE}`, data);
  }
  deleteTodo(id): Observable<APIResponse> {
    return this.http.delete<APIResponse>(`${this.URL_BASE}/${id}`);
  }
}
