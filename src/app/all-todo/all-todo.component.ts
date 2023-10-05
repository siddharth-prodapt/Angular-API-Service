import { Component } from '@angular/core';
import { GettodosService } from '../services/gettodos.service';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css']
})
export class AllTodoComponent {
  todoList:any;
  baseUrl: string = "https://jsonplaceholder.typicode.com";
  status:boolean= true;
  
  constructor(private todoService:GettodosService){}
  
  ngOnInit(){
    this.todoService.get(this.baseUrl+"/todos")
    .subscribe(response => {
      console.log("in get to do subscribe")
      // this.todoList= JSON.parse(JSON.stringify(response)) as typeof response;
      this.todoList = response;
      setTimeout(()=>{this.status = false;}, 2000)

      // this.todoList = 'data assigned';
    });
  } 
}
