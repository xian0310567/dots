import {TodoListResponse} from '../useTodoState';

export type GetTodoCallback = {
  getTodo: () => {todoList: TodoListResponse[]};
};
