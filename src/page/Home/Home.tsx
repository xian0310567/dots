import React from 'react';

import Container from '@/components/atom/Container';
import MonthlyPicker from '@/components/feature/Home/MonthlyPicker';
import TodoView from '@/components/feature/Home/TodoView';

import useDays from '@/hooks/useDays';

const Home = () => {
  const {useGetAllDatesInThisMonth} = useDays();

  return (
    <Container>
      <MonthlyPicker date={useGetAllDatesInThisMonth()} />
      <TodoView />
    </Container>
  );
};

export default Home;
