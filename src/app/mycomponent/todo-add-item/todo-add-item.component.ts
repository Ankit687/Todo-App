import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.css']
})
export class TodoAddItemComponent implements OnInit {
  title!: string;
  desc!: string;
  active!: boolean;
  count: number = 0;

  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: this.count + 1,
      title: this.title,
      desc: this.desc,
      // active: this.active
      active: false // default value
    }

    this.todoAdd.emit(todo);
  }
}
