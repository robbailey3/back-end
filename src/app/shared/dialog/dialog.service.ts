import { Injectable } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { Dialog } from './dialog';
import { Subject, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public response: Subject<boolean>;
  public dialogOptions = new Subject<Dialog>();
  confirm(options: Dialog): Observable<boolean> {
    this.response = new Subject<boolean>(); // Create a new subject to avoid interference
    this.dialogOptions.next(options);
    return this.response.asObservable();
  }
  handleUserResponse(response: boolean) {
    this.response.next(response);
    this.response.complete();
  }
}
