import {View, FlatList} from 'react-native';
import Todo from '@/components/feature/Home/Todo';

import useClearTodo from '@/hooks/feature/todo/useClearTodo';

import {TodoViewProps} from './lib/TodoView';
import {TodoListResponse} from '@/hooks/feature/todo/useTodo';

import styled from './lib/styled';

const TodoView = (props: TodoViewProps) => {
  const {toDayClearTodo} = useClearTodo();

  const clear = toDayClearTodo();

  const clearTodo = (todo: TodoListResponse) => {
    return !!clear.find(clear => clear.todo == todo.id);
  };

  return (
    <View style={styled.container}>
      <FlatList
        data={props.todoList}
        keyExtractor={todo => todo.id}
        renderItem={todo => <Todo todo={todo} clear={clearTodo(todo.item)} />}
      />
    </View>
  );
};

export default TodoView;
