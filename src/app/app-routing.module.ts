import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardRootComponent } from './dashboard/dashboard-root/dashboard-root.component';
import { ErrorLogRootComponent } from './error-log/error-log-root/error-log-root.component';
import { LoginComponent } from './login/login.component';
import { PhotosRootComponent } from './photos/photos-root/photos-root.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardRootComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'errors',
    component: ErrorLogRootComponent,
    canActivate: [AuthGuard]
  },
  { path: 'photos', component: PhotosRootComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
