import { ValidatorFn } from '@angular/forms';

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  validators: ValidatorFn[];
  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      order?: number;
      controlType?: string;
      validators?: ValidatorFn[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validators = options.validators || [];
  }
}
