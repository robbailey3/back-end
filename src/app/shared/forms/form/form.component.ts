import { QuestionControlService } from './../question-control.service';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './../questions/question-base';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() buttonText: string;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
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
  }
}
