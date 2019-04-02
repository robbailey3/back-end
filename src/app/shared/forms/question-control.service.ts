import { QuestionBase } from './questions/question-base';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() {}
  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach((question: QuestionBase<any>) => {
      if (false) {
        const formgroup = new FormGroup({});
        question['options'].forEach((option: any) => {
          formgroup.addControl(question.key, new FormControl(option.value));
        });
        group[question.key] = formgroup;
      } else if (question.controlType === 'checkbox') {
        const formgroup = new FormGroup({});
        question['options'].forEach((option: any) => {
          formgroup.addControl(
            option.key,
            new FormControl(question.value === option.value)
          );
        });
        group[question.key] = formgroup;
      } else {
        group[question.key] = new FormControl(
          question.value,
          question.validators
        );
      }
    });
    console.log(group);
    return new FormGroup(group);
  }
}
