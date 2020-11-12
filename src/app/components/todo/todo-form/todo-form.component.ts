import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from './../todo-service.service';
import { Todo } from './../todo';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  name: string ="";
  description: string="";
  constructor(private todoService: TodoServiceService) { }
  ngOnInit(): void {
  }

  addTodo() {
    this.todoService.addTodo(new Todo(this.name,this.description));
  this.name="";
  this.description="";
  }
}
