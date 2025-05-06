import { ListAllTodoOutput } from "../../domain/dto/list-all-todo-output";
import { ListAllTodo } from "../../domain/usecase/list-all-todo";
import { TodoRepository } from "../repositories/todo-repository";

export class ListAllTodoImpl implements ListAllTodo {

    constructor(readonly todoRepository: TodoRepository 
    ) {}
        
    execute(): Promise<ListAllTodoOutput> {
       return this.todoRepository.listAllTodo()
    } 
}