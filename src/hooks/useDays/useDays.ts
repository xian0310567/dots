import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import {useDaysCallback} from './lib/useDays';

dayjs.locale('ko');

const useDays = () => {
  const getAllDatesInThisMonth = () => {
    const today = dayjs();

    const firstDayOfMonth = today.startOf('month');

    // 이번 달의 마지막 날짜 가져오기
    const lastDayOfMonth = today.endOf('month');

    // 날짜 간격을 1일로 설정하여 모든 날짜 가져오기
    const allDatesInMonth: useDaysCallback[] = [];
    let currentDate = firstDayOfMonth;

    while (
      currentDate.isBefore(lastDayOfMonth) ||
      currentDate.isSame(lastDayOfMonth)
    ) {
      // allDatesInMonth.push(currentDate.format('YYYY-MM-DD (ddd)'));
      allDatesInMonth.push({
        date: currentDate.format('YYYY-MM-DD'),
        daysOfTheWeek: currentDate.format('ddd'),
      });
      currentDate = currentDate.add(1, 'day');
    }

    return allDatesInMonth;
  };

  return {getAllDatesInThisMonth};
};

export default useDays;
