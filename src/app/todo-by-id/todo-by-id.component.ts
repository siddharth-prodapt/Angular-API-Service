import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GettodosService } from '../services/gettodos.service';
import { Constants } from '../config/constants';
@Component({
  selector: 'app-todo-by-id',
  templateUrl: './todo-by-id.component.html',
  styleUrls: ['./todo-by-id.component.css'],
  providers: [GettodosService]
})
export class TodoByIdComponent {
  todo: any;
  status: boolean = false;

  constructor(private service: GettodosService) {
    console.log(Constants.API_ENDPOINT)
  }

  onClickHandler(inputValue: string) {
    console.log(inputValue);
    this.status = false;

    setTimeout(() => { }, 2000);

    if (inputValue.length !== 0)
      this.service.get(Constants.API_ENDPOINT + "/todos/" + inputValue)
        .subscribe(todo => {
          this.todo = todo;
          this.status = true;
        });
  }

}
