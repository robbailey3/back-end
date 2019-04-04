import { Debug } from './../debug';
import { NavigationService } from './navigation.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private navService: NavigationService) {}

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
}
