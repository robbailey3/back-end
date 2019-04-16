import { Observable, of, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private menuStatus = new Subject<boolean>();
  $menuStatus = this.menuStatus.asObservable();
  private notifStatus = new Subject<boolean>();
  $notifStatus = this.notifStatus.asObservable();
  constructor() {}
  buttonStatus(status: boolean) {
    this.menuStatus.next(status);
  }
  notificiationButtonStatus(status: boolean) {
    this.notifStatus.next(status);
  }
}
