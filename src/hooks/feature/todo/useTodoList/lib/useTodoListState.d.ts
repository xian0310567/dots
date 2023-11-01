export type TodoListStateCallback = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export type TodoResponse = {
  id: string;
  user: string;
  name: string;
  color: string;
};
