import { QuestionControlService } from './../question-control.service';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../questions/question-base';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private service: QuestionControlService) {}

  ngOnInit() {
    this.form = this.service.toFormGroup(this.questions);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
