import {useRecoilValue, useRecoilState} from 'recoil';
import todoCollection from '@/hooks/collection/todoCollection';

import {userState} from '@/store/user';
import {todoState} from '@/store/todo';

import {GetTodoCallback} from '../lib/serviceInterface/getTodo';
import {TodoListStateCallback, TodoResponse} from '../lib/useTodoListState';

const service = (state: TodoListStateCallback): GetTodoCallback => {
  const user = useRecoilValue(userState);
  const [todo, setTodo] = useRecoilState(todoState);

  let todoTemp: TodoResponse[] = [];

  const getTodo = () => {
    // useEffect(() => {
    todoCollection
      .where('user', '==', user)
      .get()
      .then(res => {
        res.forEach(single => {
          todoTemp.push({
            ...(single.data() as TodoResponse),
            id: single.id,
          });
        });
        setTodo(todoTemp);
      });
    // }, [user]);

    return {
      todoList: todoTemp,
    };
  };

  return {getTodo};
};

export default service;
