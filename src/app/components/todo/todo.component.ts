import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './todo'
import { TodoServiceService } from  './todo-service.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
  }
  deleteTodo() {
    this.todoService.deleteTodo(this.todo);
  }

}
