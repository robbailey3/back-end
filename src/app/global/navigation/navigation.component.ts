import { NavigationService } from './navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public menuActive = true;
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.addNavSubscription();
  }
  addNavSubscription() {
    this.navService.$menuStatus.subscribe((response: boolean) => {
      console.log(response);
      this.menuActive = response;
    });
  }
}
