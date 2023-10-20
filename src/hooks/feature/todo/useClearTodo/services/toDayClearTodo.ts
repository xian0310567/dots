import React from 'react';
import {useRecoilValue} from 'recoil';

import {selectedDateState} from '@/store/selectedDate';
import {clearTodoState} from '@/store/clearTodo';

import {ToDayClearTodoCallback} from '../lib/servicesInterface/toDayClearTodo';

const service = (): ToDayClearTodoCallback => {
  const selectedDate = useRecoilValue(selectedDateState);
  const clearTodo = useRecoilValue(clearTodoState);

  const toDayClearTodo = () => {
    const toDay = clearTodo.filter(todo => todo.date == selectedDate);

    return toDay;
  };

  return {toDayClearTodo};
};

export default service;
