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
      if (
        question.controlType === 'checkbox' ||
        question.controlType === 'radio'
      ) {
        const arr = new FormArray([]);
        question['options'].forEach(() => {
          const control = new FormControl();
          arr.push(control);
        });
        group[question.key] = arr;
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
