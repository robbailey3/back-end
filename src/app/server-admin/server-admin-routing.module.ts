import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ServerAdminRootComponent } from './server-admin-root/server-admin-root.component';

const routes: Routes = [
  {
    path: 'server',
    component: ServerAdminRootComponent,
    canActivate: [AuthGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerAdminRoutingModule {}
