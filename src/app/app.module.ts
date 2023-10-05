import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllTodoComponent } from './all-todo/all-todo.component';
import { SearchTodoComponent } from './search-todo/search-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { TodoByIdComponent } from './todo-by-id/todo-by-id.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllTodoComponent,
    SearchTodoComponent,
    DeleteTodoComponent,
    UpdateTodoComponent,
    TodoByIdComponent,
    TodoCardComponent,
    SpinnerComponent,
    AddTodoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
