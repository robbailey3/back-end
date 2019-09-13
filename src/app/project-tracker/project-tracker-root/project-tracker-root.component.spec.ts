import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTrackerRootComponent } from './project-tracker-root.component';

describe('ProjectTrackerRootComponent', () => {
  let component: ProjectTrackerRootComponent;
  let fixture: ComponentFixture<ProjectTrackerRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTrackerRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTrackerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
