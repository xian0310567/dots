import {AddClearTodoCallback} from './servicesInterface/addClearTodo';
import {GetClearTodoCallback} from './servicesInterface/getClearTodo';
import {ToDayClearTodoCallback} from './servicesInterface/toDayClearTodo';
import {DeleteClearTodoCallback} from './servicesInterface/deleteClearTodo';

export type ClearTodoServiceCallback = AddClearTodoCallback &
  GetClearTodoCallback &
  ToDayClearTodoCallback &
  DeleteClearTodoCallback;
