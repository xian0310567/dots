import {TodoStateCallback} from '../lib/useTodoState';
import {TodoServiceCallback} from '../lib/useTodoService';

import addTodoService from './addTodo';
import getTodoService from './getTodo';

const index = (state: TodoStateCallback): TodoServiceCallback => {
  const {addTodo} = addTodoService(state);
  const {getTodo} = getTodoService(state);

  return {
    addTodo,
    getTodo,
  };
};

export default index;
