import { LoginComponent } from './login/login.component';
import { PhotosRootComponent } from './photos/photos-root/photos-root.component';
import { ErrorLogRootComponent } from './error-log/error-log-root/error-log-root.component';
import { DashboardRootComponent } from './dashboard/dashboard-root/dashboard-root.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings/settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardRootComponent },
  { path: 'errors', component: ErrorLogRootComponent },
  { path: 'photos', component: PhotosRootComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
