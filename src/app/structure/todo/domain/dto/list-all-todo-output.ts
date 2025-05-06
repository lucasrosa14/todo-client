import { Todo } from "../entity/todo";

export interface ListAllTodoOutput {
    message: string,
    todoList: Array<Todo>
}