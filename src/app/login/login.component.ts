import { ErrorLoggingService } from './../shared/services/error-logging.service';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Debug } from '../global/debug';
import { PasswordQuestion } from '../shared/forms/questions/password-question';
import { TextQuestion } from '../shared/forms/questions/text-question';
import { UploadQuestion } from '../shared/forms/questions/upload-question';
import { AuthService } from './auth.service';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private errorlogger: ErrorLoggingService
  ) {}
  public questions = [
    new TextQuestion({
      label: 'E-mail Address',
      key: 'username',
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
    this.authService
      .login(val)
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err: Error) => {
        this.errorlogger.postJavascriptError(err);
      });
  }

  ngOnInit() {}
}
