import { QuestionBase } from './question-base';
export class RangeQuestion extends QuestionBase<number> {
  controlType = 'range';
  min: number;
  max: number;
  step: number;
  constructor(options: {} = {}) {
    super(options);
    this.min = options['min'] || 0;
    this.max = options['max'] || 100;
    this.step = options['step'] || 1;
  }
}
