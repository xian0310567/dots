import {TodoListResponse} from '@/hooks/feature/todo/useTodoList';

export type TodoStateCallback = {
  todo: TodoListResponse;
  setTodo: React.Dispatch<React.SetStateAction<TodoListResponse>>;
  getProperty: <K extends keyof TodoListResponse>(
    key: K,
  ) => TodoListResponse[K] | undefined;
  setProperty: <K extends keyof TodoListResponse>(
    key: K,
    value: TodoListResponse[K],
  ) => void;
};
