import React from 'react';
import {useRecoilValue} from 'recoil';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import MonthlyPicker from '@/components/feature/Home/MonthlyPicker';
import TodoView from '@/components/feature/Home/TodoView';

import {todoState} from '@/store/todo';
import useDays from '@/hooks/feature/days/useDays';
import useTodo from '@/hooks/feature/todo/useTodo';

const Home = () => {
  const {useGetAllDatesInThisMonth} = useDays();
  const {getTodo} = useTodo();

  getTodo();
  const todo = useRecoilValue(todoState);

  return (
    <Container>
      <Header />
      <MonthlyPicker date={useGetAllDatesInThisMonth()} />
      <TodoView todoList={todo} />
    </Container>
  );
};

export default Home;
