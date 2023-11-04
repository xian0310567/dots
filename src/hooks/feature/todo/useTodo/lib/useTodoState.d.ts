import {TodoResponse} from '@/hooks/feature/todo/useTodoList';

export type TodoStateCallback = {
  todo: TodoResponse;
  setTodo: React.Dispatch<React.SetStateAction<TodoResponse>>;
  getProperty: <K extends keyof TodoResponse>(key: K) => TodoResponse[K];
  setProperty: <K extends keyof TodoResponse>(
    key: K,
    value: TodoResponse[K],
  ) => void;
};
