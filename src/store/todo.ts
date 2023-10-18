import {atom} from 'recoil';

export type TodoResponse = {
  id: string;
  user: string;
  name: string;
  color: string;
};

export const todoState = atom<TodoResponse[]>({
  key: 'todoState',
  default: [],
});
