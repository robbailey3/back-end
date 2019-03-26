import { Component, OnInit } from '@angular/core';
import { ErrorsService } from '../errors.service';
import { APIResponse } from 'src/app/shared/interfaces/api-response';

@Component({
  selector: 'rb-php-errors',
  templateUrl: './php-errors.component.html',
  styleUrls: ['./php-errors.component.scss']
})
export class PhpErrorsComponent implements OnInit {
  errors: [];
  constructor(private service: ErrorsService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getPHPErrors().subscribe((res: APIResponse) => {
      this.errors = res.response.results as any;
    });
  }
}
