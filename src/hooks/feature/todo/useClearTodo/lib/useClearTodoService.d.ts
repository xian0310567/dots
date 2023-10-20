import {AddClearTodoCallback} from './servicesInterface/addClearTodo';
import {GetClearTodoCallback} from './servicesInterface/getClearTodo';
import {ToDayClearTodoCallback} from './servicesInterface/toDayClearTodo';

export type ClearTodoServiceCallback = AddClearTodoCallback &
  GetClearTodoCallback &
  ToDayClearTodoCallback;
