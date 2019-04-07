import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() label: string;
  @Input() id: string;
  @Input() name: string;
  @Input() checked = false;
  @Output() isChecked: EventEmitter<any> = new EventEmitter();
  constructor() {}
  checkboxChange($event) {
    this.isChecked.emit($event.target.checked);
  }
}
