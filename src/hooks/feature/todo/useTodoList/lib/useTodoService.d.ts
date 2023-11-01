import {AddTodoCallback} from './serviceInterface/addTodo';
import {GetTodoCallback} from './serviceInterface/getTodo';

export type TodoServiceCallback = AddTodoCallback & GetTodoCallback;
