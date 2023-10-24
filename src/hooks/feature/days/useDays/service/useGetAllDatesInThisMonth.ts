import dayjs from 'dayjs';

import {GetAllDatesInThisMonthCallback} from '../lib/useDaysService';

const service = () => {
  const useGetAllDatesInThisMonth = (): GetAllDatesInThisMonthCallback[] => {
    const today = dayjs();

    const firstDayOfMonth = today.startOf('month');

    // 이번 달의 마지막 날짜 가져오기
    const lastDayOfMonth = today.endOf('month');

    const nowDay = dayjs().format('DD');

    // 날짜 간격을 1일로 설정하여 모든 날짜 가져오기
    const allDatesInMonth: GetAllDatesInThisMonthCallback[] = [];
    let currentDate = firstDayOfMonth;

    while (
      currentDate.isBefore(lastDayOfMonth) ||
      currentDate.isSame(lastDayOfMonth)
    ) {
      // allDatesInMonth.push(currentDate.format('YYYY-MM-DD (ddd)'));
      if (currentDate.format('DD') > nowDay) break;

      allDatesInMonth.push({
        date: currentDate.format('YYYY-MM-DD'),
        daysOfTheWeek: currentDate.format('ddd'),
      });
      currentDate = currentDate.add(1, 'day');
    }

    return allDatesInMonth;
  };

  return {useGetAllDatesInThisMonth};
};

export default service;
