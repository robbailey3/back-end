import { QuestionBase } from './question-base';

export class ChipsQuestion extends QuestionBase<string> {
  controlType = 'chips';
  removable: boolean;
  constructor(options: {} = {}) {
    super(options);
    this.removable = options['removable'] || true;
  }
}
