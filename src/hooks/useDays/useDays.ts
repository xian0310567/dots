import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import useDaysState from './useDaysState';
import useDaysService from './service/index';

import {DaysCallback} from './lib/useDays';

dayjs.locale('ko');

const useDays = (): DaysCallback => {
  const state = useDaysState();

  const service = useDaysService(state);

  return {
    ...state,
    ...service,
  };
};

export default useDays;
