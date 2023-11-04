import {useState} from 'react';

import {TodoStateCallback} from './lib/useTodoState';
import {TodoResponse} from '@/hooks/feature/todo/useTodoList';

const useTodoState = (): TodoStateCallback => {
  const [todo, setTodo] = useState<TodoResponse>({
    id: '',
    user: '',
    name: '',
    color: '',
  });

  const getProperty = <K extends keyof TodoResponse>(key: K) => todo[key];

  const setProperty = <K extends keyof TodoResponse>(
    key: K,
    value: TodoResponse[K],
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
