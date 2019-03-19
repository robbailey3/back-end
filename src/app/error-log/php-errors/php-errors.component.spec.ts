import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpErrorsComponent } from './php-errors.component';

describe('PhpErrorsComponent', () => {
  let component: PhpErrorsComponent;
  let fixture: ComponentFixture<PhpErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
