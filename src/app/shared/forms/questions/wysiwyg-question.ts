import { QuestionBase } from './question-base';

export class WysiwygQuestion extends QuestionBase<string> {
  controlType = 'wysiwyg';
  constructor(options: {} = {}) {
    super(options);
    console.log(this);
  }
}
