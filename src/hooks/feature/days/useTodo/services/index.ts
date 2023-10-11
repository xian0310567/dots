import {TodoStateCallback} from '../lib/useTodoState';
import {TodoServiceCallback} from '../lib/useTodoService';

import addTodoService from './addTodo';

const index = (state: TodoStateCallback): TodoServiceCallback => {
  const {addTodo} = addTodoService(state);

  return {
    addTodo,
  };
};

export default index;
