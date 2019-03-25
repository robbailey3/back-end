import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRootComponent } from './dashboard-root.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { FlexContainerComponent } from 'src/app/shared/components/flex-container/flex-container.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { TodoService } from '../todo-list/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardRootComponent', () => {
  let component: DashboardRootComponent;
  let fixture: ComponentFixture<DashboardRootComponent>;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        DashboardRootComponent,
        TodoListComponent,
        FlexContainerComponent,
        CardComponent
      ],
      providers: [TodoService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRootComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain the todo-list component', () => {
    expect(compiled.querySelector('rb-todo-list')).not.toBeNull();
    console.log(compiled.querySelector('rb-todo-list'));
  });
});
