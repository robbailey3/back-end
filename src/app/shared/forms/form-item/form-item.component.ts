import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../questions/question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rb-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() {
    return false;
  }
  constructor() {
    console.log(this);
  }

  ngOnInit() {}
}
