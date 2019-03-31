import { QuestionBase } from './question-base';
export class TextareaQuestion extends QuestionBase<string> {
  constructor(options: {} = {}) {
    super(options);
  }
}
