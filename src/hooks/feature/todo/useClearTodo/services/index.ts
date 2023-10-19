import addClearTodoService from './addClearTodo';

import {ClearTodoServiceCallback} from '../lib/useClearTodoService';

const index = (): ClearTodoServiceCallback => {
  const {addClearTodo} = addClearTodoService();

  return {addClearTodo};
};

export default index;
