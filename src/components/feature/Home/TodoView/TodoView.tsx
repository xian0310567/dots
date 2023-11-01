import {View, FlatList} from 'react-native';
import Todo from '@/components/feature/Home/Todo';
import LottieView from 'lottie-react-native';

import useClearTodo from '@/hooks/feature/todo/useClearTodo';

import {TodoViewProps} from './lib/TodoView';
import {TodoResponse} from '@/hooks/feature/todo/useTodoList';

import styled from './lib/styled';

const TodoView = (props: TodoViewProps) => {
  const {toDayClearTodo} = useClearTodo();

  const clear = toDayClearTodo();

  const clearTodo = (todo: TodoResponse) => {
    return !!clear.find(clear => clear.todo == todo.id);
  };

  if (!props.todoList)
    return (
      <LottieView
        source={require('@/assets/animation/loader.json')}
        autoPlay
        loop
      />
    );

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
