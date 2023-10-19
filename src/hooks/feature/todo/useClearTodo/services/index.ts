import addClearTodoService from './addClearTodo';
import getClearTodoService from './getClearTodo';

import {ClearTodoServiceCallback} from '../lib/useClearTodoService';

const index = (): ClearTodoServiceCallback => {
  const {addClearTodo} = addClearTodoService();
  const {getClearTodo} = getClearTodoService();

  return {addClearTodo, getClearTodo};
};

export default index;
