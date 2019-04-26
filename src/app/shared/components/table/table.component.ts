import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  totalItems: number;
  @Input() data: any[];
  @Input() pageSize: number;
  constructor() {}

  ngOnInit() {
    this.totalItems = this.data.length;
  }
}
