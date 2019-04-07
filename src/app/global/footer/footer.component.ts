import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'rb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public menuActive = true;
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.addNavSubscription();
  }
  addNavSubscription() {
    this.navService.$menuStatus.subscribe((response: boolean) => {
      this.menuActive = response;
    });
  }
}
