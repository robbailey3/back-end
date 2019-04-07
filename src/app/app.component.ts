import { AuthService } from './login/auth.service';
import { NavigationService } from './global/navigation/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public menuActive = true;
  constructor(
    private navService: NavigationService,
    private auth: AuthService
  ) {}
  ngOnInit() {
    this.navSubscribe();
    this.auth.getTokenFromStorage();
  }
  navSubscribe() {
    this.navService.$menuStatus.subscribe((response: boolean) => {
      this.menuActive = response;
    });
  }
}
