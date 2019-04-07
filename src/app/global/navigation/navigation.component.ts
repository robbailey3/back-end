import { AuthService } from 'src/app/login/auth.service';
import { Debug } from './../debug';
import { NavigationService } from './navigation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public menuActive = true;
  public submenus = {
    blog: false
  };
  constructor(
    private navService: NavigationService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addNavSubscription();
  }
  addNavSubscription() {
    this.navService.$menuStatus.subscribe((response: boolean) => {
      Debug.log(response);
      this.menuActive = response;
    });
  }
  toggleSubmenu(submenu: string) {
    if (this.submenus[submenu] !== undefined) {
      this.submenus[submenu] = !this.submenus[submenu];
    }
  }
  toggleMenuMobile() {
    if (window.innerWidth < 768) {
    }
  }
  logOut() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
