import {useEffect} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import todoCollection from '@/hooks/collection/todoCollection';

import {userState} from '@/store/user';
import {todoState} from '@/store/todo';

import {GetTodoCallback} from '../lib/serviceInterface/getTodo';
import {TodoStateCallback, TodoListResponse} from '../lib/useTodoState';

const service = (state: TodoStateCallback): GetTodoCallback => {
  const user = useRecoilValue(userState);
  const setTodo = useSetRecoilState(todoState);

  let todoTemp: TodoListResponse[] = [];

  const getTodo = () => {
    useEffect(() => {
      todoCollection
        .where('user', '==', user)
        .get()
        .then(res => {
          res.forEach(single => {
            todoTemp.push({
              ...(single.data() as TodoListResponse),
              id: single.id,
            });
          });

          setTodo(todoTemp);
        });
    }, [user]);

    return {
      todoList: todoTemp,
    };
  };

  return {getTodo};
};

export default service;
