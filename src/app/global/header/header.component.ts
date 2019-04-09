import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuActive: boolean;
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.menuActive = window.innerWidth > 768;
    this.subscribeToButton();
  }
  menuButtonClickHandler() {
    this.menuActive = !this.menuActive;
    this.navService.buttonStatus(this.menuActive);
  }
  subscribeToButton() {
    this.navService.$menuStatus.subscribe(status => {
      this.menuActive = status;
    });
  }
}
