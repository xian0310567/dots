import React, {useEffect} from 'react';

import Header from '@/components/feature/AddEventModal/Header';
import Container from '@/components/atom/Container';
import NameForm from '@/components/feature/AddEventModal/NameForm';
import SaveFloating from '@/components/feature/AddEventModal/SaveFloating';

import useTodo from '@/hooks/feature/todo/useTodo/useTodo';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorCallback} from '@/components/layout/Navigator';

type Props = NativeStackScreenProps<NavigatorCallback, 'SetTodo'>;

const SetTodo = (props: Props) => {
  const todoId = props.route.params.todoId;
  const todo = useTodo();

  useEffect(() => {
    todo.getTodo(todoId);
  }, []);

  return (
    <>
      {/* <Header addTodo={() => addTodo()} /> */}
      <Container padding={30}>
        <NameForm
          color={todo.getProperty('color')}
          setColor={color => todo.setProperty('color', color)}
          name={todo.getProperty('name')}
          setName={name => todo.setProperty('name', name)}
        />
      </Container>
      <SaveFloating />
    </>
  );
};

export default SetTodo;
