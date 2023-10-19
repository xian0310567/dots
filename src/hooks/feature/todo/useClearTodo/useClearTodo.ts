import useClearTodoService from './services';

import {ClearTodoCallback} from './lib/useClearTodo';

const useClearTodo = (): ClearTodoCallback => {
  const service = useClearTodoService();

  return {
    ...service,
  };
};

export default useClearTodo;
