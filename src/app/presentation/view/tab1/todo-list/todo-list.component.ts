import { Component, computed, Input, Signal, signal, WritableSignal } from '@angular/core';
import { IonGrid, IonCol, IonCheckbox } from "@ionic/angular/standalone";
import { Todo } from 'src/app/structure/todo/domain/entity/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [
    IonCheckbox,  
    IonCol, 
    IonGrid
  ]
})
export class TodoListComponent {

  @Input() todoList: WritableSignal<Array<Todo>> = signal([]);

  doneTodoList: Signal<Todo[]> = computed(() => this.todoList().filter(todo => todo.done));
  
  pendingTodoList: Signal<Todo[]> = computed(() => this.todoList().filter(todo => ! todo.done));
  
  constructor() { }

 

}
