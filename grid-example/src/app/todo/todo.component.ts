import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {

  todos = [
    {
      item: 'Take dog to vet',
    },
    {
      item: 'Get oil change',
    },
    {
      item: 'Finish super hard puzzle',
    },
    {
      item: 'Pack for Denver',
    },
    {
      item: 'Create todo app',
    }
  ]

  addTodo(input:HTMLInputElement){
    this.todos = [{item: input.value}, ...this.todos];
  }

}
