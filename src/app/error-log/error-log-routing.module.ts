import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { ErrorDashboardComponent } from './error-dashboard/error-dashboard.component';
import { ErrorLogRootComponent } from './error-log-root/error-log-root.component';
import { JavascriptErrorsComponent } from './javascript-errors/javascript-errors.component';
import { PhpErrorsComponent } from './php-errors/php-errors.component';

const routes: Routes = [
  {
    path: 'errors',
    component: ErrorLogRootComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ErrorDashboardComponent
      },
      {
        path: 'php',
        component: PhpErrorsComponent
      },
      {
        path: 'javascript',
        component: JavascriptErrorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorLogRoutingModule {}
