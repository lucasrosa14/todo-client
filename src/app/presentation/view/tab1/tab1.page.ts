import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ListAllTodo } from 'src/app/structure/todo/domain/usecase/list-all-todo';
import { ListAllTodoImpl } from 'src/app/structure/todo/data/usecase/list-all-todo-impl';
import { Todo } from 'src/app/structure/todo/domain/entity/todo';
import { HttpTodoRepositoryService } from 'src/app/structure/todo/infra/http/http-todo-repository.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    TodoListComponent
],
})
export class Tab1Page implements OnInit {

  listAllTodoUseCase!: ListAllTodo
  todoList: WritableSignal<Array<Todo>> = signal([]);

  constructor(
    readonly httpTodoRepositoryService: HttpTodoRepositoryService
  ) {
    this.listAllTodoUseCase = new ListAllTodoImpl(httpTodoRepositoryService);
  }
  ngOnInit(): void {
    this.listAllTodoUseCase.execute().then(output => {
      this.todoList.set(output.todoList);
    });
    
  }
}
