import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExifPanelComponent } from './exif-panel.component';

describe('ExifPanelComponent', () => {
  let component: ExifPanelComponent;
  let fixture: ComponentFixture<ExifPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExifPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExifPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
