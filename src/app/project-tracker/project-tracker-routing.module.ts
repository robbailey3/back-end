import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTrackerRootComponent } from './project-tracker-root/project-tracker-root.component';

const routes: Routes = [
  {
    path: 'project-tracker',
    pathMatch: 'full',
    component: ProjectTrackerRootComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTrackerRoutingModule {}
