import {useState} from 'react';

import {TodoListStateCallback} from './lib/useTodoListState';

const useTodoState = (): TodoListStateCallback => {
  // todo 생성용
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  return {
    name,
    setName,
    color,
    setColor,
  };
};

export default useTodoState;
