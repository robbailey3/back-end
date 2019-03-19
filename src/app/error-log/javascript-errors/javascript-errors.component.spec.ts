import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptErrorsComponent } from './javascript-errors.component';

describe('JavascriptErrorsComponent', () => {
  let component: JavascriptErrorsComponent;
  let fixture: ComponentFixture<JavascriptErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
