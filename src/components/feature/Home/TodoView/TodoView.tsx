import {View, FlatList} from 'react-native';

import AddTodo from '@/components/feature/Home/AddTodo';

import {TodoViewProps} from './lib/TodoView';

import styled from './lib/styled';

const TodoView = (props: TodoViewProps) => {
  console.log(props.todoList);
  return (
    <View style={styled.container}>
      <AddTodo />
    </View>
  );
};

export default TodoView;
