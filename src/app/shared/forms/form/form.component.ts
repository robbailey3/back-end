import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionControlService } from '../question-control.service';
import { QuestionBase } from '../questions/question-base';

@Component({
  selector: 'rb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() buttonText: string;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Output() FormDataSubmit: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  payload = '';
  constructor(private service: QuestionControlService) {}

  ngOnInit() {
    if (!this.buttonText) {
      throw new Error('buttonText was not defined');
    }
    this.form = this.service.toFormGroup(this.questions);
  }
  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
    this.formSubmit.emit(this.payload);
    this.FormDataSubmit.emit(this.getFormData());
  }
  getFormData(): FormData {
    const formData = new FormData();
    this.questions.forEach(q => {
      formData.append(q.key, this.form.get(q.key).value);
    });
    return formData;
  }
}
