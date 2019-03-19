import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLogRootComponent } from './error-log-root/error-log-root.component';
import { PhpErrorsComponent } from './php-errors/php-errors.component';
import { JavascriptErrorsComponent } from './javascript-errors/javascript-errors.component';

@NgModule({
  declarations: [ErrorLogRootComponent, PhpErrorsComponent, JavascriptErrorsComponent],
  imports: [
    CommonModule
  ]
})
export class ErrorLogModule { }
