import React from 'react';

import Header from '@/components/feature/AddEventModal/Header';
import Container from '@/components/atom/Container';
import NameForm from '@/components/feature/AddEventModal/NameForm';
import SaveFloating from '@/components/feature/AddEventModal/SaveFloating';

import useTodoList from '@/hooks/feature/todo/useTodoList';
import useTodo from '@/hooks/feature/todo/useTodo/useTodo';

const SetTodo = () => {
  const todo = useTodo();

  return (
    <>
      {/* <Header addTodo={() => addTodo()} /> */}
      <Container padding={30}>
        {/* <NameForm setColor={setColor} setName={setName} /> */}
      </Container>
      <SaveFloating />
    </>
  );
};

export default SetTodo;
