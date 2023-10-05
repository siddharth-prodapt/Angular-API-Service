import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoByIdComponent } from './todo-by-id.component';

describe('TodoByIdComponent', () => {
  let component: TodoByIdComponent;
  let fixture: ComponentFixture<TodoByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoByIdComponent]
    });
    fixture = TestBed.createComponent(TodoByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
