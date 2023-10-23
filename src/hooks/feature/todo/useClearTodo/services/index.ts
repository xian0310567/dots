import addClearTodoService from './addClearTodo';
import getClearTodoService from './getClearTodo';
import toDayClearTodoService from './toDayClearTodo';
import deleteClearTodoService from './deleteClearTodo';

import {ClearTodoServiceCallback} from '../lib/useClearTodoService';

const index = (): ClearTodoServiceCallback => {
  const {addClearTodo} = addClearTodoService();
  const {getClearTodo} = getClearTodoService();
  const {toDayClearTodo} = toDayClearTodoService();
  const {deleteClearTodo} = deleteClearTodoService();

  return {addClearTodo, getClearTodo, toDayClearTodo, deleteClearTodo};
};

export default index;
