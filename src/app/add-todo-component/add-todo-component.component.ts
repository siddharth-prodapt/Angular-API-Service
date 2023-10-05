import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GettodosService } from '../services/gettodos.service';
import { Constants } from '../config/constants';

@Component({
  selector: 'app-add-todo-component',
  templateUrl: './add-todo-component.component.html',
  styleUrls: ['./add-todo-component.component.css']
})
export class AddTodoComponentComponent {
id:number|null = null;
completed:boolean|null = null;
userId:number|null = null;
title:string|null = null;

  constructor(private service: GettodosService){};

  submit=false;

 
  onSubmitHandler(formData: NgForm){
    console.log("Form Data: ", formData.value);
    this.service.post(Constants.API_ENDPOINT+"/todos", formData.value).subscribe(res=> console.log(res)); 
  }
}
