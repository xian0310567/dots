import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import device from 'react-native-device-info';

import {userState} from '@/store/user';

import {InitializerEffectorProps} from './lib/InitializerEffector';

const InitializerEffector = (props: InitializerEffectorProps) => {
  const [user, setUser] = useRecoilState(userState);
  device.getUniqueId().then(res => {
    setUser(res);
  });

  useEffect(() => {
    if (user) {
    }
  }, [user]);

  return <>{props.children}</>;
};

export default InitializerEffector;
