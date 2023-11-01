import {AddTodoCallback} from './serviceInterface/addTodo';
import {GetTodoCallback} from './serviceInterface/getTodo';

export type TodoListServiceCallback = AddTodoCallback & GetTodoCallback;
