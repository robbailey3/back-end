import { QuestionBase } from './question-base';
export class UploadQuestion extends QuestionBase<string> {
  controlType = 'upload';
  handler: () => void;
  multiple: boolean;
  constructor(options: {} = {}) {
    super(options);
    this.handler = options['handler'] || function () {};
    this.multiple = options['multiple'] || false;
  }
}
