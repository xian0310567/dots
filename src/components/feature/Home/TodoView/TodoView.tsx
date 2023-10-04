import {View, FlatList} from 'react-native';

import AddTodo from '@/components/feature/Home/AddTodo';

import styled from './lib/styled';

const TodoView = () => {
  return (
    <View style={styled.container}>
      <AddTodo />
    </View>
  );
};

export default TodoView;
