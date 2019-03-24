import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuActive = true;
  constructor(private navService: NavigationService) {}

  ngOnInit() {}
  menuButtonClickHandler() {
    this.menuActive = !this.menuActive;
    this.navService.buttonStatus(this.menuActive);
  }
}
