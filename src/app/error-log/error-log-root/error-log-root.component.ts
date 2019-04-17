import { Debug } from 'src/app/global/debug';
import { APIResponse } from 'src/app/shared/interfaces/api-response';

import { Component, OnInit } from '@angular/core';

import { ErrorsService } from '../errors.service';

@Component({
  selector: 'rb-error-log-root',
  templateUrl: './error-log-root.component.html',
  styleUrls: ['./error-log-root.component.scss']
})
export class ErrorLogRootComponent implements OnInit {
  PHPerrors: any[];
  JSerrors: any[];
  phpErrorCount: number;
  jsErrorCount: number;
  constructor(private service: ErrorsService) {}

  ngOnInit() {
    this.getData();
  }

  private getData(): void {
    this.service.getAllErrors();
    this.service.$errors.subscribe(
      (res: any) => {
        this.PHPerrors =
          res['phpErrors'].map((err: any) => {
            if (err['errorJSON']) {
              err['errorJSON'] = JSON.parse(err['errorJSON']);
            }
            return err;
          }) || [];
        this.phpErrorCount = this.PHPerrors.length;
        this.JSerrors =
          res['JSErrors'].map((err: any) => {
            if (err['errorJSON']) {
              err['errorJSON'] = JSON.parse(err['errorJSON']);
            }
            return err;
          }) || [];
        this.jsErrorCount = this.JSerrors.length;
        console.log(this);
      },
      (err: any) => {
        Debug.log(err);
      }
    );
  }
}
