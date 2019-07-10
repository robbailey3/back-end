import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DigitalOceanService } from './digital-ocean.service';
import { ServerAdminDashboardComponent } from './server-admin-dashboard/server-admin-dashboard.component';
import { ServerAdminRootComponent } from './server-admin-root/server-admin-root.component';
import { ServerAdminRoutingModule } from './server-admin-routing.module';

@NgModule({
  declarations: [ServerAdminRootComponent, ServerAdminDashboardComponent],
  imports: [CommonModule, ServerAdminRoutingModule],
  providers: [DigitalOceanService]
})
export class ServerAdminModule {}
