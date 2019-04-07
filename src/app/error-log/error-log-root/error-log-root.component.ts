import { APIResponse } from 'src/app/shared/interfaces/api-response';
import { ErrorsService } from './../errors.service';
import { Component, OnInit } from '@angular/core';

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
    this.service.getAllErrors().subscribe((res: APIResponse) => {
      this.PHPerrors =
        res.response.results['phpErrors'].map((err: any) => {
          if (err['errorJSON']) {
            err['errorJSON'] = JSON.parse(err['errorJSON']);
          }
          return err;
        }) || [];
      this.phpErrorCount = this.PHPerrors.length;
      this.JSerrors =
        res.response.results['JSErrors'].map((err: any) => {
          if (err['errorJSON']) {
            err['errorJSON'] = JSON.parse(err['errorJSON']);
          }
          return err;
        }) || [];
      this.jsErrorCount = this.JSerrors.length;
    });
  }
}
