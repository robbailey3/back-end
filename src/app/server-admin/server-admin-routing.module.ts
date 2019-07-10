import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ServerAdminDashboardComponent } from './server-admin-dashboard/server-admin-dashboard.component';
import { ServerAdminRootComponent } from './server-admin-root/server-admin-root.component';

const routes: Routes = [
  {
    path: 'server',
    component: ServerAdminRootComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ServerAdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerAdminRoutingModule {}
