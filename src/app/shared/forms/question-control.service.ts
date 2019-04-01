import { QuestionBase } from './questions/question-base';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() {}
  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};

    questions.forEach((question: QuestionBase<any>) => {
      group[question.key] = new FormControl(
        question.value,
        question.validators
      );
      console.log(group[question.key]);
    });
    return new FormGroup(group);
  }
}
