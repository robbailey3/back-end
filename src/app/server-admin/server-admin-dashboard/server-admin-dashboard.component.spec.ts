import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAdminDashboardComponent } from './server-admin-dashboard.component';

describe('ServerAdminDashboardComponent', () => {
  let component: ServerAdminDashboardComponent;
  let fixture: ComponentFixture<ServerAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
