import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent {
  @Input() public label: string;
  @Input() public id: string;
  @Input() public name: string;
  @Input() public checked = false;
  @Output() public isChecked: EventEmitter<any> = new EventEmitter();
  constructor() {}
  public checkboxChange($event) {
    this.isChecked.emit($event.target.checked);
  }
}
