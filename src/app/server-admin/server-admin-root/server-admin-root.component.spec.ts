import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAdminRootComponent } from './server-admin-root.component';

describe('ServerAdminRootComponent', () => {
  let component: ServerAdminRootComponent;
  let fixture: ComponentFixture<ServerAdminRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerAdminRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAdminRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
