import firestore from '@react-native-firebase/firestore';

import {AddTodoCallback} from '../lib/serviceInterface/addTodo';
import {TodoStateCallback} from '../lib/useTodoState';

export const todoCollection = firestore().collection('todo');

const service = (state: TodoStateCallback): AddTodoCallback => {
  const addTodo = () => {
    return todoCollection.add({
      name: state.name,
      color: state.color,
      user: '',
    });
  };

  return {addTodo};
};

export default service;
