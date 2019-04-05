import { PasswordQuestion } from './../shared/forms/questions/password-question';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { TextQuestion } from '../shared/forms/questions/text-question';
import { Validators } from '@angular/forms';
import { Debug } from '../global/debug';
import { Router } from '@angular/router';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
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
    console.log('SUBMITTING FORM');
    console.log(val);
    this.authService.login(val).then(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {}
}
