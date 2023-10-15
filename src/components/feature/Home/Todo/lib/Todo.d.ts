import {ListRenderItemInfo} from 'react-native';
import {TodoListResponse} from '@/hooks/feature/days/useTodo';

export type TodoProps = {
  todo: ListRenderItemInfo<TodoListResponse>;
};
