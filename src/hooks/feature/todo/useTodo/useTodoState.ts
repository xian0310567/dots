import {useState} from 'react';

import {TodoStateCallback} from './lib/useTodoState';

const useTodoState = (): TodoStateCallback => {
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
