import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../questions/question-base';
import { Component, Input } from '@angular/core';
import { growIn } from '../../animations';

@Component({
  selector: 'rb-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
  animations: [growIn]
})
export class FormItemComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  get isInvalid() {
    return (
      this.form.controls[this.question.key].invalid &&
      !this.form.controls[this.question.key].pristine
    );
  }
}
