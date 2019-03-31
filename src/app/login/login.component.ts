import { WysiwygQuestion } from './../shared/forms/questions/wysiwyg-question';
import { CheckboxQuestion } from './../shared/forms/questions/checkbox-question';
import { PasswordQuestion } from './../shared/forms/questions/password-question';
import { RadioQuestion } from './../shared/forms/questions/radio-question';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { TextQuestion } from '../shared/forms/questions/text-question';
import { RangeQuestion } from '../shared/forms/questions/range-question';
import { DropdownQuestion } from '../shared/forms/questions/dropdown-question';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public questions = [
    new TextQuestion({
      label: 'Username',
      key: 'username',
      type: 'email',
      required: true
    }),
    new DropdownQuestion({
      label: 'Select',
      key: 'select-question',
      multiple: true,
      options: ['Hello World', 'blah blah blah', 'c', 'd']
    }),
    new WysiwygQuestion({
      label: 'Rich Text',
      key: 'rich-text-key'
    }),
    new RadioQuestion({
      label: 'Radio Question',
      key: 'foo',
      options: [{ key: 'One', value: 1 }, { key: 'Two', value: 2 }],
      required: true
    }),
    new CheckboxQuestion({
      label: 'Checkbox Question',
      key: 'checkbox',
      options: ['1', '2', '3'],
      required: true
    }),
    new RangeQuestion({
      label: 'Range Question',
      key: 'foo2',
      min: 10,
      max: 100,
      step: 10,
      required: true
    }),
    new PasswordQuestion({
      label: 'Password',
      key: 'foo-password'
    })
  ];
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
