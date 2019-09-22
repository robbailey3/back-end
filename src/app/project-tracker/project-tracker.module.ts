import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectTrackerRootComponent } from './project-tracker-root/project-tracker-root.component';
import { ProjectTrackerRoutingModule } from './project-tracker-routing.module';

@NgModule({
  declarations: [ProjectTrackerRootComponent],
  imports: [CommonModule, ProjectTrackerRoutingModule]
})
export class ProjectTrackerModule {}
