import React from 'react';
import {useRecoilValue} from 'recoil';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import MonthlyPicker from '@/components/feature/Home/MonthlyPicker';
import TodoView from '@/components/feature/Home/TodoView';

import {todoState} from '@/store/todo';
import useDays from '@/hooks/feature/days/useDays';

const Home = () => {
  const {useGetAllDatesInThisMonth} = useDays();

  const todo = useRecoilValue(todoState);

  console.log(todo);

  return (
    <Container>
      <Header />
      <MonthlyPicker date={useGetAllDatesInThisMonth()} />
      <TodoView todoList={todo} />
    </Container>
  );
};

export default Home;
