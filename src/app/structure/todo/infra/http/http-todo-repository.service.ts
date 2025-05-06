import { Injectable } from '@angular/core';
import { HttpClientService, HttpHeader, HttpResponse } from 'src/app/shared/services/http/http-client.service';
import { TodoRepository } from '../../data/repositories/todo-repository';
import { ListAllTodoOutput } from '../../domain/dto/list-all-todo-output';

@Injectable({
  providedIn: 'root'
})
export class HttpTodoRepositoryService implements TodoRepository {

  constructor(
    readonly httpClientService: HttpClientService,
  ) { }

  async listAllTodo(): Promise<ListAllTodoOutput> {
    const headers: HttpHeader = {
      AcessControlAllowOrigin: "*",
      contentType: "application/json",
    };

    const body = {

    };
    const response: HttpResponse = await this.httpClientService.post("http://localhost:8080/todo/list", headers, JSON.stringify(body));
  
    if (response.body.todoList) {
      return {
        message: "Todos found",
        todoList:response.body.todoList
      };
    } else {
      return{
        message:  "Todos not found",
        todoList: []
      }
    }    
  }
}
