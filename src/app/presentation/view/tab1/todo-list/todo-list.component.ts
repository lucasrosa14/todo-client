import { Component, computed, Input, Signal, signal, WritableSignal } from '@angular/core';
import { IonGrid, IonCol, IonCheckbox, IonRow, CheckboxChangeEventDetail } from "@ionic/angular/standalone";
import { Todo } from 'src/app/structure/todo/domain/entity/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [IonRow, 
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

  toggleTodo(isDone: boolean, todoId: string) {
    this.todoList.update((todos: Array<Todo>) => {
      return todos.map((todo: Todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: isDone };
        } else {
          return todo;
        }
      });
    });
  }

  handleCheckboxChange(isCheck: CheckboxChangeEventDetail<boolean>, todoID: string) {
    this.toggleTodo(isCheck.checked, todoID);
  }
}
