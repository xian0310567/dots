import {useRecoilValue, useSetRecoilState} from 'recoil';
import todoCollection from '@/hooks/collection/todoCollection';

import {userState} from '@/store/user';
import {todoValidateState} from '@/store/todoValidate';
import useUUID from '@/hooks/util/useUUID';

import {AddTodoCallback} from '../lib/serviceInterface/addTodo';
import {TodoStateCallback} from '../lib/useTodoState';

const service = (state: TodoStateCallback): AddTodoCallback => {
  const user = useRecoilValue(userState);
  const setTodoValidate = useSetRecoilState(todoValidateState);

  const addTodo = () => {
    setTodoValidate(useUUID());
    return todoCollection.add({
      name: state.name,
      color: state.color,
      user: user,
    });
  };

  return {addTodo};
};

export default service;
