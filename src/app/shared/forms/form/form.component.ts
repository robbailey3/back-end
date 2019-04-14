import { Debug } from 'src/app/global/debug';

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
  /**
   * @description
   */
  onSubmit() {
    this.payload = JSON.stringify(this.form.value);
    this.formSubmit.emit(this.payload);
    this.FormDataSubmit.emit(this.getFormData());
  }
  /**
   * @description Gets FormData from the form inputs.
   */
  getFormData(): FormData {
    const formData = new FormData();
    this.questions.forEach((q: QuestionBase<any>) => {
      if (q.controlType === 'upload') {
        const files = this.form.get(q.key).value as FileList;
        if (files !== null && files.length > 0) {
          for (let i = 0; i < files.length; i += 1) {
            formData.append(q.key, files.item(i));
          }
        }
      } else {
        formData.append(q.key, this.form.get(q.key).value);
      }
    });
    return formData;
  }
}
