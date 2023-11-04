import {TodoListStateCallback} from './useTodoListState';
import {TodoListServiceCallback} from './useTodoListService';

export type TodoListCallback = TodoListStateCallback & TodoListServiceCallback;
