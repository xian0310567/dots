import React from 'react';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import MonthlyPicker from '@/components/feature/Home/MonthlyPicker';
import TodoView from '@/components/feature/Home/TodoView';

import useDays from '@/hooks/feature/days/useDays';
import useTodo from '@/hooks/feature/todo/useTodo';

const Home = () => {
  const {useGetAllDatesInThisMonth} = useDays();
  const {getTodo} = useTodo();
  const {todoList} = getTodo();

  return (
    <Container>
      <Header />
      <MonthlyPicker date={useGetAllDatesInThisMonth()} />
      <TodoView todoList={todoList} />
    </Container>
  );
};

export default Home;
