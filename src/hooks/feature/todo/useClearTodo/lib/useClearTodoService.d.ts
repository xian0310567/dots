import {AddClearTodoCallback} from './servicesInterface/addClearTodo';
import {GetClearTodoCallback} from './servicesInterface/getClearTodo';

export type ClearTodoServiceCallback = AddClearTodoCallback &
  GetClearTodoCallback;
