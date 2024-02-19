import React from 'react';
import {useRecoilValue} from 'recoil';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import TodoView from '@/components/feature/Home/TodoView';

import {todoState} from '@/store/todo';

const Home = () => {

  const todo = useRecoilValue(todoState);

  return (
    <Container>
      <Header />
      <TodoView todoList={todo} />
    </Container>
  );
};

export default Home;
