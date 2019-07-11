import { Component, OnInit } from '@angular/core';
import { APIResponse } from '../../shared/interfaces/api-response';
import { ServerAdminService } from '../server-admin.service';

@Component({
  selector: 'rb-server-admin-dashboard',
  templateUrl: './server-admin-dashboard.component.html',
  styleUrls: ['./server-admin-dashboard.component.scss']
})
export class ServerAdminDashboardComponent implements OnInit {
  public droplets: object;
  constructor(private service: ServerAdminService) {}

  public ngOnInit() {
    this.getData();
  }

  public getData() {
    this.service.getDroplets().subscribe((res: APIResponse) => {
      this.droplets = res.response.results['droplets'];
    });
  }
}
