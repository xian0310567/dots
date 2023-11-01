import getTodoService from './getTodo';

import {TodoServiceCallback} from '../lib/useTodoService';
import {TodoStateCallback} from '../lib/useTodoState';

const index = (state: TodoStateCallback): TodoServiceCallback => {
  const {getTodo} = getTodoService(state);

  return {getTodo};
};

export default index;
