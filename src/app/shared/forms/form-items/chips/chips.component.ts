import { Component, Input, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  RequiredValidator
} from '@angular/forms';
import { Debug } from 'src/app/global/debug';

@Component({
  selector: 'rb-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsComponent),
      multi: true
    }
  ]
})
export class ChipsComponent implements ControlValueAccessor, OnInit {
  @Input() name: string;
  @Input() id: string;
  @Input() key: string;
  @Input() value: string;
  @Input() required: boolean;
  @Input() removable: boolean;
  chips: string[] = [];
  onChange;
  inputValue: string;
  constructor() {}
  ngOnInit() {
    if (this.value) {
      this.chips = this.value.split(',');
    }
  }
  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}

  change() {
    this.onChange(this.chips.join(', '));
  }
  addValue() {
    if (this.inputValue) {
      if (this.chips.includes(this.inputValue)) {
        return;
      }
      this.chips.push(this.inputValue.trim());
    }
    this.inputValue = '';
    this.change();
    Debug.log(this.chips);
  }
  removeChip(i: number) {
    this.chips.splice(i, 1);
    this.change();
  }
}
