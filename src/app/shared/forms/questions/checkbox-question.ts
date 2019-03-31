import { QuestionBase } from './question-base';
export class CheckboxQuestion extends QuestionBase<boolean> {
  controlType = 'checkbox';
  options: string[];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || '';
  }
}
