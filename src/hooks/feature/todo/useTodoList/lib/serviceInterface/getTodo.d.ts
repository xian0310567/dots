import {TodoResponse} from '../useTodoListState';

export type GetTodoCallback = {
  getTodo: () => {todoList: TodoResponse[]};
};
