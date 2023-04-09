import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { AboutComponent } from './mycomponent/about/about.component';
import { TodoAddItemComponent } from './mycomponent/todo-add-item/todo-add-item.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'add-todo', component: TodoAddItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
