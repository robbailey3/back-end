import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServerAdminDashboardComponent } from './server-admin-dashboard/server-admin-dashboard.component';
import { ServerAdminRootComponent } from './server-admin-root/server-admin-root.component';
import { ServerAdminRoutingModule } from './server-admin-routing.module';
import { ServerAdminService } from './server-admin.service';

@NgModule({
  declarations: [ServerAdminRootComponent, ServerAdminDashboardComponent],
  imports: [CommonModule, ServerAdminRoutingModule, SharedModule],
  providers: [ServerAdminService]
})
export class ServerAdminModule {}
