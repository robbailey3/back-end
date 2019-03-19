import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogRootComponent } from './error-log-root.component';

describe('ErrorLogRootComponent', () => {
  let component: ErrorLogRootComponent;
  let fixture: ComponentFixture<ErrorLogRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLogRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
