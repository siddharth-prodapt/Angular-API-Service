import { Component } from '@angular/core';
import { GettodosService } from '../services/gettodos.service';
import {Input} from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
  providers: [GettodosService]
})
export class TodoCardComponent {
  @Input() todo:any;
}
