import React from 'react';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import GroupView from '@/components/feature/Home/GroupView';

const Home = () => {

  return (
    <Container>
      <Header />
      <GroupView />
      {/* <TodoView todoList={todo} /> */}
    </Container>
  );
};

export default Home;
