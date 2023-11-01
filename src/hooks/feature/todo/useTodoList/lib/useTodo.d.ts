import {TodoStateCallback} from './useTodoState';
import {TodoServiceCallback} from './useTodoService';

export type TodoCallback = TodoStateCallback & TodoServiceCallback;
