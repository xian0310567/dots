import {FlatList} from 'react-native';
import {Container, Loader} from './lib/styled';
import Todo from '@/components/feature/Home/Todo';

import useClearTodo from '@/hooks/feature/todo/useClearTodo';

import {TodoViewProps} from './lib/TodoView';
import {TodoResponse} from '@/hooks/feature/todo/useTodoList';

const TodoView = (props: TodoViewProps) => {
  const {toDayClearTodo} = useClearTodo();

  const clear = toDayClearTodo();

  const clearTodo = (todo: TodoResponse) => {
    return !!clear.find(clear => clear.todo == todo.id);
  };

  if (!props.todoList) return <Loader />;

  return (
    <Container>
      <FlatList
        data={props.todoList}
        keyExtractor={todo => todo.id}
        renderItem={todo => <Todo todo={todo} clear={clearTodo(todo.item)} />}
      />
    </Container>
  );
};

export default TodoView;
