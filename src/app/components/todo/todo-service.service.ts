import { Injectable } from '@angular/core';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todos: Todo[];
  constructor() { 
    this.todos=[
      new Todo("workout","leg exercice"),
      new Todo("study","read course")
    ];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  deleteTodo(todo: Todo) {
    for (var i=0; i<this.todos.length;i++) {
      if((todo.name === this.todos[i].name)&&(todo.description===this.todos[i].description)){ 
        this.todos.splice(i,1);}
    }
  }
}
