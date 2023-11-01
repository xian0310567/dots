import {TodoServiceCallback} from './useTodoService';
import {TodoStateCallback} from './useTodoState';

export type TodoCallback = TodoServiceCallback & TodoStateCallback;
