export type TodoStateCallback = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};

export type TodoListResponse = {
  id: string;
  user: string;
  name: string;
  color: string;
};
