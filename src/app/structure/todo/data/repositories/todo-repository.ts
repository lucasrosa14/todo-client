import { ListAllTodoOutput } from "../../domain/dto/list-all-todo-output";

export interface TodoRepository {
    listAllTodo(): Promise<ListAllTodoOutput>

}