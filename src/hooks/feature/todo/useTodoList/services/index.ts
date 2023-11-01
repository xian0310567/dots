import {TodoStateCallback} from '../lib/useTodoListState';
import {TodoServiceCallback} from '../lib/useTodoListService';

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
