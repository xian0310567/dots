import useTodoListState from './useTodoListState';
import useTodoService from './services';

import {TodoListCallback} from './lib/useTodoList';

const useTodoList = (): TodoListCallback => {
  const state = useTodoListState();
  const service = useTodoService(state);

  return {
    ...state,
    ...service,
  };
};

export default useTodoList;
