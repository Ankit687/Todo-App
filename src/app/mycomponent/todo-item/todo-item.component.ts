import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  todoCheckBox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    // this.todo.active = !this.todo.active;
  }

  onCheckBoxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }
}
