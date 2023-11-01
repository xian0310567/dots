import todoCollection from '@/hooks/collection/todoCollection';

import {GetTodoCallback} from '../lib/serviceInterface/getTodo';
import {TodoStateCallback} from '../lib/useTodoState';
import {TodoListResponse} from '@/hooks/feature/todo/useTodoList';

const service = (state: TodoStateCallback): GetTodoCallback => {
  const getTodo = (todo: string) => {
    todoCollection
      .where('id', '==', todo)
      .get()
      .then(res => {
        res.forEach(single => {
          state.setTodo(single.data() as TodoListResponse);
        });
      });
  };

  return {getTodo};
};

export default service;
