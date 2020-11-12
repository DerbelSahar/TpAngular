import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo';
import { TodoServiceService } from './../todo-service.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[];
  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }


}
