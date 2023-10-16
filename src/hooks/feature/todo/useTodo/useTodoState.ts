import {useState, useEffect} from 'react';

import {TodoStateCallback, TodoListResponse} from './lib/useTodoState';

const useTodoState = (): TodoStateCallback => {
  // todo 생성용
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  // todo 조회용
  const [todoList, setTodoList] = useState<TodoListResponse[]>([]);

  return {
    name,
    setName,
    color,
    setColor,
    todoList,
    setTodoList,
  };
};

export default useTodoState;
