import React from 'react';
import {useRecoilState} from 'recoil';

import {selectedDateState} from '@/store/selectedDate';

import {DaysStateCallback} from './lib/useDaysState';

const useDaysState = (): DaysStateCallback => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  return {
    selectedDate,
    setSelectedDate,
  };
};

export default useDaysState;
