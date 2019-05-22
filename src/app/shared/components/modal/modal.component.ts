import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { fadeInDown } from '../../animations';

@Component({
  selector: 'rb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fadeInDown]
})
export class ModalComponent implements OnInit {
  @Input() active: boolean;
  @Input() height = '';
  @Input() width = '';
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  close() {
    this.active = false;
    this.cancel.emit();
  }
}
