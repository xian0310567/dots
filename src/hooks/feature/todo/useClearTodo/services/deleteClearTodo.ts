import {useSetRecoilState, useRecoilValue} from 'recoil';

import clearTodoCollection from '@/hooks/collection/clearTodoCollection';

import {clearTodoState} from '@/store/clearTodo';
import {selectedDateState} from '@/store/selectedDate';

import {DeleteClearTodoCallback} from '../lib/servicesInterface/deleteClearTodo';

const service = (): DeleteClearTodoCallback => {
  const selectedDate = useRecoilValue(selectedDateState);
  const setClearTodo = useSetRecoilState(clearTodoState);

  const deleteClearTodo = (id: string) => {
    setClearTodo(prev =>
      prev.filter(clear => {
        clear.id !== id;
      }),
    );

    return clearTodoCollection
      .where('date', '==', selectedDate)
      .where('todo', '==', id)
      .get()
      .then(res => {
        clearTodoCollection.doc(res.docs[0].data().id).delete();
      });
  };

  return {deleteClearTodo};
};

export default service;
