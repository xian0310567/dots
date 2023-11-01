import {useState} from 'react';

import {TodoStateCallback} from './lib/useTodoState';
import {TodoListResponse} from '@/hooks/feature/todo/useTodoList';

const useTodoState = (): TodoStateCallback => {
  const [todo, setTodo] = useState<TodoListResponse>({
    id: '',
    user: '',
    name: '',
    color: '',
  });

  const getProperty = <K extends keyof TodoListResponse>(key: K) => {
    if (todo) return todo[key];
  };

  const setProperty = <K extends keyof TodoListResponse>(
    key: K,
    value: TodoListResponse[K],
  ) =>
    setTodo(prev => {
      return {...prev, [key]: value};
    });

  return {
    todo,
    setTodo,
    getProperty,
    setProperty,
  };
};

export default useTodoState;
