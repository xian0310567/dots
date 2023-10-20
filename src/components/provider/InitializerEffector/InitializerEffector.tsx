import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import device from 'react-native-device-info';

import useTodo from '@/hooks/feature/todo/useTodo';
import useClearTodo from '@/hooks/feature/todo/useClearTodo';

import {userState} from '@/store/user';

import {InitializerEffectorProps} from './lib/InitializerEffector';

const InitializerEffector = (props: InitializerEffectorProps) => {
  const [user, setUser] = useRecoilState(userState);
  device.getUniqueId().then(res => {
    setUser(res);
  });

  const {getTodo} = useTodo();
  const {getClearTodo} = useClearTodo();

  useEffect(() => {
    if (user) {
      getTodo();
      getClearTodo();
    }
  }, [user]);

  return <>{props.children}</>;
};

export default InitializerEffector;
