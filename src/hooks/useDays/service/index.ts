import {DaysStateCallback} from '../lib/useDaysState';

import useGetAllDatesInThisMonthService from './useGetAllDatesInThisMonth';

import {DaysServiceCallback} from '../lib/useDaysService';

const services = (state: DaysStateCallback): DaysServiceCallback => {
  const {useGetAllDatesInThisMonth} = useGetAllDatesInThisMonthService();

  return {
    useGetAllDatesInThisMonth,
  };
};

export default services;
