import {TodoStateCallback} from './useTodoListState';
import {TodoServiceCallback} from './useTodoListService';

export type TodoListCallback = TodoStateCallback & TodoServiceCallback;
