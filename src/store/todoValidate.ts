import {atom} from 'recoil';
import dayjs from 'dayjs';

export const todoValidateState = atom({
  key: 'todoValidateState',
  default: '',
});
