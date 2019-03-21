import { PhotosRootComponent } from './photos/photos-root/photos-root.component';
import { ErrorLogRootComponent } from './error-log/error-log-root/error-log-root.component';
import { DashboardRootComponent } from './dashboard/dashboard-root/dashboard-root.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogRootComponent } from './blog/blog-root/blog-root.component';
import { SettingsComponent } from './settings/settings/settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardRootComponent },
  { path: 'blog', component: BlogRootComponent },
  { path: 'errors', component: ErrorLogRootComponent },
  { path: 'photos', component: PhotosRootComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
