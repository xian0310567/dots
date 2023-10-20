import {ListRenderItemInfo} from 'react-native';
import {TodoListResponse} from '@/hooks/feature/todo/useTodo';

export type TodoProps = {
  todo: ListRenderItemInfo<TodoListResponse>;
  clear: boolean;
};
