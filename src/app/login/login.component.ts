import { WysiwygQuestion } from './../shared/forms/questions/wysiwyg-question';
import { CheckboxQuestion } from './../shared/forms/questions/checkbox-question';
import { PasswordQuestion } from './../shared/forms/questions/password-question';
import { RadioQuestion } from './../shared/forms/questions/radio-question';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { TextQuestion } from '../shared/forms/questions/text-question';
import { RangeQuestion } from '../shared/forms/questions/range-question';
import { DropdownQuestion } from '../shared/forms/questions/dropdown-question';
import { Validators } from '@angular/forms';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}
  public questions = [
    new TextQuestion({
      label: 'E-mail Address',
      key: 'email',
      value: '',
      type: 'email',
      validators: [Validators.required, Validators.email]
    }),
    new PasswordQuestion({
      label: 'Password',
      key: 'password',
      value: '',
      validators: [Validators.required, Validators.minLength(6)]
    })
  ];
  submitLoginForm(val: any) {
    console.log(val);
  }

  ngOnInit() {}
}
