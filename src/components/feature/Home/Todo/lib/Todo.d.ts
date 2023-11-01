import {ListRenderItemInfo} from 'react-native';
import {TodoResponse} from '@/hooks/feature/todo/useTodo';

export type TodoProps = {
  todo: ListRenderItemInfo<TodoResponse>;
  clear: boolean;
};
