import { APIResponse } from 'src/app/shared/interfaces/api-response';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-php-errors',
  templateUrl: './php-errors.component.html',
  styleUrls: ['./php-errors.component.scss']
})
export class PhpErrorsComponent implements OnInit {
  errors: [];
  constructor() {}

  ngOnInit() {}
}
