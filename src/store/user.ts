import {atom} from 'recoil';
import device from 'react-native-device-info';

export const userState = atom({
  key: 'userState',
  default: '',
});
