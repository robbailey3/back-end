import { Component, OnInit } from '@angular/core';

import { Debug } from '../../global/debug';
import { ErrorsService } from '../errors.service';

@Component({
  selector: 'rb-error-dashboard',
  templateUrl: './error-dashboard.component.html',
  styleUrls: ['./error-dashboard.component.scss']
})
export class ErrorDashboardComponent implements OnInit {
  PHPerrors: any[];
  JSerrors: any[];
  phpErrorCount: number;
  jsErrorCount: number;
  constructor(private service: ErrorsService) {}

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.$errors.subscribe((res: any) => {
      this.JSerrors = res.JSErrors;
      this.PHPerrors = res.phpErrors;
      this.jsErrorCount = this.JSerrors.length;
      this.phpErrorCount = this.PHPerrors.length;
    });
  }
}
