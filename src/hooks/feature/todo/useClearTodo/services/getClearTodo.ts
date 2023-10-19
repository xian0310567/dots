import {useRecoilValue, useSetRecoilState} from 'recoil';

import {userState} from '@/store/user';
import {clearTodoState, ClearTodoResponse} from '@/store/clearTodo';

import clearTodoCollection from '@/hooks/collection/clearTodoCollection';

import {GetClearTodoCallback} from '../lib/servicesInterface/getClearTodo';

const service = (): GetClearTodoCallback => {
  const user = useRecoilValue(userState);
  const setClearTodo = useSetRecoilState(clearTodoState);

  let clearTodoTemp: ClearTodoResponse[] = [];

  const getClearTodo = () => {
    clearTodoCollection
      .where('user', '==', user)
      .get()
      .then(res => {
        res.forEach(single => {
          clearTodoTemp.push({
            ...(single.data() as ClearTodoResponse),
            id: single.id,
          });
        });
        setClearTodo(clearTodoTemp);
      });
  };

  return {getClearTodo};
};

export default service;
