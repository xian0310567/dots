import {ClearTodoResponse} from '@/store/clearTodo';

export type ToDayClearTodoCallback = {
  toDayClearTodo: () => ClearTodoResponse[];
};
