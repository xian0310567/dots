import {useRecoilValue} from 'recoil';

import {userState} from '@/store/user';
import {selectedDateState} from '@/store/selectedDate';

import useUUID from '@/hooks/util/useUUID';
import clearTodoCollection from '@/hooks/collection/clearTodoCollection';

import {AddClearTodoCallback} from '../lib/servicesInterface/addClearTodo';

const service = (): AddClearTodoCallback => {
  const user = useRecoilValue(userState);
  const selectedDate = useRecoilValue(selectedDateState);

  const addClearTodo = (todo: string) => {
    const id = useUUID();

    return clearTodoCollection.doc(id).set({
      todo: todo,
      date: selectedDate,
      user: user,
    });
  };

  return {addClearTodo};
};

export default service;
