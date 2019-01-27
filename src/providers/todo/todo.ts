import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {reorderArray} from "ionic-angular";

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private archives = [];

  constructor(public http: HttpClient) {

  }

  getTodos() {
    return this.todos
  }

  getArchivedTodos() {
    return this.archives;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const idx = this.todos.indexOf(todo);
    this.todos.splice(idx, 1);
  }

  archiveTodo(todo) {
    const idx = this.todos.indexOf(todo);
    if (idx >= 0) {
      this.archives.push(todo);
      this.todos.splice(idx, 1);
    }
  }

  reorderTodo(e) {
    reorderArray(this.todos, e);
  }

}
