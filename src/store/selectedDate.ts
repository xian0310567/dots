import {atom} from 'recoil';
import dayjs from 'dayjs';

export const selectedDateState = atom({
  key: 'selectedDateState',
  default: dayjs().format('YYYY-MM-DD'),
});
