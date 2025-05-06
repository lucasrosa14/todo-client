import { ListAllTodoOutput } from "../dto/list-all-todo-output"

export interface ListAllTodo {
    execute(): Promise<ListAllTodoOutput>  
}

