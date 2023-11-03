import {useRecoilValue, useSetRecoilState} from 'recoil';
import todoCollection from '@/hooks/collection/todoCollection';

import {userState} from '@/store/user';
import {todoState} from '@/store/todo';
import useUUID from '@/hooks/util/useUUID';

import {AddTodoCallback} from '../lib/serviceInterface/addTodo';
import {TodoListStateCallback} from '../lib/useTodoListState';

const service = (state: TodoListStateCallback): AddTodoCallback => {
  const user = useRecoilValue(userState);
  const setTodo = useSetRecoilState(todoState);

  const addTodo = () => {
    const id = useUUID();

    setTodo(todo => [
      ...todo,
      {
        id,
        name: state.name,
        color: state.color,
        user,
      },
    ]);

    return todoCollection.doc(id).set({
      id: id,
      name: state.name,
      color: state.color,
      user: user,
    });
  };

  return {addTodo};
};

export default service;
