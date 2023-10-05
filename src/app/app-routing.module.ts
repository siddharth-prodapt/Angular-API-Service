import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTodoComponent } from './all-todo/all-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { SearchTodoComponent } from './search-todo/search-todo.component';
import { TodoByIdComponent } from './todo-by-id/todo-by-id.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';

const routes: Routes = [
  {
    path:'alltodos',
    component: AllTodoComponent
  },
  {
    path:'deletetodo',
    component: DeleteTodoComponent
  },
  {
    path: 'searchtodo',
    component: SearchTodoComponent
  },  
  {
    path:'gettodoById',
    component: TodoByIdComponent
  },
  {
    path: 'updatetodo',
    component: UpdateTodoComponent
  },
  {
    path: 'addtodo',
    component: AddTodoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
