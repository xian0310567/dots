import {useState} from 'react';

import useColors from '@/hooks/feature/todo/useColors';

import {TodoListStateCallback} from './lib/useTodoListState';

const useTodoState = (): TodoListStateCallback => {
  const {colorList} = useColors();
  const [name, setName] = useState('');
  const [color, setColor] = useState(colorList[0].color);

  return {
    name,
    setName,
    color,
    setColor,
  };
};

export default useTodoState;
