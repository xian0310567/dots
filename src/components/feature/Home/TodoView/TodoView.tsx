import {View, FlatList} from 'react-native';

import Todo from '@/components/feature/Home/Todo';

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
    </View>
  );
};

export default TodoView;
