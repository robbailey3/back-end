import { QuestionBase } from './question-base';

export class UploadQuestion extends QuestionBase<string> {
  controlType = 'upload';
  multiple: boolean;
  showFilePreviews: boolean;
  accept: string;
  maxFileSize: number;
  constructor(options: {} = {}) {
    super(options);
    this.multiple = options['multiple'] || false;
    this.showFilePreviews = options['showFilePreviews'] || false;
    this.accept = options['accept'] || '';
    this.maxFileSize = options['maxFileSize'] || 2000000;
  }
}
