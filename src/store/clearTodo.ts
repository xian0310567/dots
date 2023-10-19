import {atom} from 'recoil';

export type ClearTodoResponse = {
  id: string;
  todo: string;
  date: string;
  user: string;
};

export const clearTodoState = atom<ClearTodoResponse[]>({
  key: 'clearTodoState',
  default: [],
});
