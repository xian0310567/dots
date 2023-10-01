import React from 'react';

import Container from '@/components/atom/Container';
import MonthlyPicker from '@/components/feature/Home/MonthlyPicker';

import useDays from '@/hooks/useDays';

const Home = () => {
  const {getAllDatesInThisMonth} = useDays();

  return (
    <Container>
      <MonthlyPicker date={getAllDatesInThisMonth()} />
    </Container>
  );
};

export default Home;
