import addClearTodoService from './addClearTodo';
import getClearTodoService from './getClearTodo';
import toDayClearTodoService from './toDayClearTodo';

import {ClearTodoServiceCallback} from '../lib/useClearTodoService';

const index = (): ClearTodoServiceCallback => {
  const {addClearTodo} = addClearTodoService();
  const {getClearTodo} = getClearTodoService();
  const {toDayClearTodo} = toDayClearTodoService();

  return {addClearTodo, getClearTodo, toDayClearTodo};
};

export default index;
