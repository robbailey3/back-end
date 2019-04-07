import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorDashboardComponent } from './error-dashboard/error-dashboard.component';
import { ErrorLogRootComponent } from './error-log-root/error-log-root.component';
import { ErrorLogRoutingModule } from './error-log-routing.module';
import { JavascriptErrorsComponent } from './javascript-errors/javascript-errors.component';
import { PhpErrorsComponent } from './php-errors/php-errors.component';

@NgModule({
  declarations: [
    ErrorLogRootComponent,
    PhpErrorsComponent,
    JavascriptErrorsComponent,
    ErrorDashboardComponent
  ],
  imports: [CommonModule, RouterModule, ErrorLogRoutingModule]
})
export class ErrorLogModule {}
