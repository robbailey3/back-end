import { Observable, of, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private menuStatus = new Subject<boolean>();
  $menuStatus = this.menuStatus.asObservable();
  constructor() {}
  buttonStatus(status: boolean) {
    this.menuStatus.next(status);
  }
}
