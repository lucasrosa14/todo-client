import { Injectable } from '@angular/core';
import { ListAllTodoOutput } from '../../domain/dto/list-all-todo-output';
import { Todo } from '../../domain/entity/todo';
import { TodoRepository } from '../../data/repositories/todo-repository';

@Injectable({
  providedIn: 'root'
})
export class MemoryTodoRepositoryService implements TodoRepository {

listOfTodo: Array<Todo> = [
  {
    id: '123',
    name: 'Café',
    limitDate: '2025-04-28',
    done: false
  },
  {
    id: '456',
    name: 'Estudar',
    limitDate: '2025-04-28',
    done: true
}  
];
  

  constructor() { }

  listAllTodo(): Promise<ListAllTodoOutput> {
    return Promise.resolve({
      message: 'Lista de todos', 
      todoList: this.listOfTodo
    });
  }
}
