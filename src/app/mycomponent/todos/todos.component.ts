import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localIteams: any;
  todos: Todo[]; // Array of Todo objects

  constructor() {
    this.localIteams = localStorage.getItem('todos');
    if (this.localIteams === null) {
      this.todos = [
        // new Todo(1, "Learn Angular", "Learn Angular from scratch", false),
        // {
        //   sno: 2,
        //   title: "Learn Java",
        //   desc: "Learn Java from scratch",
        //   active: false
        // },
        // { sno: 3, title: "Learn Python", desc: "Learn Python from scratch", active: false },
        // { sno: 4, title: "Learn C#", desc: "Learn C# from scratch", active: false },
        // { sno: 5, title: "Learn C++", desc: "Learn C++ from scratch", active: false },
        // { sno: 6, title: "Learn C", desc: "Learn C from scratch", active: false },
        // { sno: 7, title: "Learn JavaScript", desc: "Learn JavaScript from scratch", active: false },
        // { sno: 8, title: "Learn TypeScript", desc: "Learn TypeScript from scratch", active: false },
        // { sno: 9, title: "Learn React", desc: "Learn React from scratch", active: false },
        // { sno: 10, title: "Learn Angular", desc: "Learn Angular from scratch", active: false },
        // { sno: 11, title: "Learn Vue", desc: "Learn Vue from scratch", active: false },
        // { sno: 12, title: "Learn Node", desc: "Learn Node from scratch", active: false },
        // { sno: 13, title: "Learn Express", desc: "Learn Express from scratch", active: false },
        // { sno: 14, title: "Learn MongoDB", desc: "Learn MongoDB from scratch", active: false },
        // { sno: 15, title: "Learn MySQL", desc: "Learn MySQL from scratch", active: false },
        // { sno: 16, title: "Learn PostgreSQL", desc: "Learn PostgreSQL from scratch", active: false },
        // { sno: 17, title: "Learn GraphQL", desc: "Learn GraphQL from scratch", active: false },
        // { sno: 18, title: "Learn Docker", desc: "Learn Docker from scratch", active: false },
        // { sno: 19, title: "Learn Kubernetes", desc: "Learn Kubernetes from scratch", active: false },
        // { sno: 20, title: "Learn AWS", desc: "Learn AWS from scratch", active: false },
        // { sno: 21, title: "Learn GCP", desc: "Learn GCP from scratch", active: false },
        // { sno: 22, title: "Learn Azure", desc: "Learn Azure from scratch", active: false },
        // { sno: 23, title: "Learn Terraform", desc: "Learn Terraform from scratch", active: false },
        // { sno: 24, title: "Learn Ansible", desc: "Learn Ansible from scratch", active: false },
        // { sno: 25, title: "Learn Jenkins", desc: "Learn Jenkins from scratch", active: false },
        // { sno: 26, title: "Learn Git", desc: "Learn Git from scratch", active: false },
        // { sno: 27, title: "Learn GitHub", desc: "Learn GitHub from scratch", active: false },
        // { sno: 28, title: "Learn GitLab", desc: "Learn GitLab from scratch", active: false },
        // { sno: 29, title: "Learn BitBucket", desc: "Learn BitBucket from scratch", active: false },
        // { sno: 30, title: "Learn Linux", desc: "Learn Linux from scratch", active: false },
        // { sno: 31, title: "Learn Windows", desc: "Learn Windows from scratch", active: false },
        // { sno: 32, title: "Learn Mac", desc: "Learn Mac from scratch", active: false },
        // { sno: 33, title: "Learn Bash", desc: "Learn Bash from scratch", active: false },
        // { sno: 34, title: "Learn PowerShell", desc: "Learn PowerShell from scratch", active: false },
        // { sno: 35, title: "Learn Zsh", desc: "Learn Zsh from scratch", active: false },
        // { sno: 36, title: "Learn Vim", desc: "Learn Vim from scratch", active: false },
        // { sno: 37, title: "Learn Emacs", desc: "Learn Emacs from scratch", active: false },
        // { sno: 38, title: "Learn VSCode", desc: "Learn VSCode from scratch", active: false },
        // { sno: 39, title: "Learn IntelliJ", desc: "Learn IntelliJ from scratch", active: false },
        // { sno: 40, title: "Learn Eclipse", desc: "Learn Eclipse from scratch", active: false },
        // { sno: 41, title: "Learn NetBeans", desc: "Learn NetBeans from scratch", active: false },
        // { sno: 42, title: "Learn Atom", desc: "Learn Atom from scratch", active: false },
        // { sno: 43, title: "Learn Sublime", desc: "Learn Sublime from scratch", active: false },
        // { sno: 44, title: "Learn Notepad++", desc: "Learn Notepad++ from scratch", active: false }
      ]
    } else {
      this.todos = JSON.parse(this.localIteams);
    }
  }

  ngOnInit(): void {
  }

  deleteTodoItem(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.table(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodoItem(todo: Todo) {
    if (this.todos.length === 0) {
      todo.sno = 1;
      this.todos.push(todo);
      console.table(this.todos);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      return;
    }
    const lastTodo = this.todos[this.todos.length - 1];
    const newTodo = {
      sno: lastTodo.sno + 1,
      title: todo.title,
      desc: todo.desc,
      active: todo.active
    }
    this.todos.push(newTodo);
    console.table(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodoItem(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    console.table(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
