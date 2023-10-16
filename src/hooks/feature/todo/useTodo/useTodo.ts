import useTodoState from './useTodoState';
import useTodoService from './services';

import {TodoCallback} from './lib/useTodo';

const useTodo = (): TodoCallback => {
  const state = useTodoState();
  const service = useTodoService(state);

  return {
    ...state,
    ...service,
  };
};

export default useTodo;
