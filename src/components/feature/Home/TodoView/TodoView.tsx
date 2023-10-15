import {View, FlatList} from 'react-native';

import Todo from '@/components/feature/Home/Todo';
import AddTodo from '@/components/feature/Home/AddTodo';

import {TodoViewProps} from './lib/TodoView';

import styled from './lib/styled';

const TodoView = (props: TodoViewProps) => {
  return (
    <View style={styled.container}>
      <FlatList
        data={props.todoList}
        keyExtractor={todo => todo.id}
        renderItem={todo => <Todo todo={todo} />}
      />
      {/* <AddTodo /> */}
    </View>
  );
};

export default TodoView;
