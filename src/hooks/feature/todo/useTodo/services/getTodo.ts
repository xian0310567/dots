import {useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import todoCollection from '@/hooks/collection/todoCollection';

import {userState} from '@/store/user';
import {todoValidateState} from '@/store/todoValidate';

import {GetTodoCallback} from '../lib/serviceInterface/getTodo';
import {TodoStateCallback, TodoListResponse} from '../lib/useTodoState';

const service = (state: TodoStateCallback): GetTodoCallback => {
  const user = useRecoilValue(userState);
  const todoValidate = useRecoilValue(todoValidateState);

  let todo: TodoListResponse[] = [];

  const getTodo = () => {
    useEffect(() => {
      todoCollection
        .where('user', '==', user)
        .get()
        .then(res => {
          res.forEach(single => {
            todo.push({
              ...(single.data() as TodoListResponse),
              id: single.id,
            });
          });

          state.setTodoList(todo);
        });
    }, [user, todoValidate]);

    return {
      todoList: state.todoList,
    };
  };

  return {getTodo};
};

export default service;