export type TodoStateCallback = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  todoList: TodoListResponse[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoListResponse[]>>;
};

export type TodoListResponse = {
  user: string;
  name: string;
  color: string;
};
