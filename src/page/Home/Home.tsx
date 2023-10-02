import React from 'react';

import Container from '@/components/atom/Container';
import MonthlyPicker from '@/components/feature/Home/MonthlyPicker';

import useDays from '@/hooks/useDays';

const Home = () => {
  const {useGetAllDatesInThisMonth} = useDays();

  return (
    <Container>
      <MonthlyPicker date={useGetAllDatesInThisMonth()} />
    </Container>
  );
};

export default Home;
