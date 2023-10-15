import React from 'react';
import {useSetRecoilState} from 'recoil';

import {TouchableOpacity, Text} from 'react-native';

import {selectedDateState} from '@/store/selectedDate';

import {DatePickerProps} from './lib/DatePicker';

import style from './lib/styled';

const DatePicker = (props: DatePickerProps) => {
  const setSelectedDate = useSetRecoilState(selectedDateState);
  const date = props.date.item;

  const styled = style(date.date == props.selectedDate);

  return (
    <TouchableOpacity
      style={styled.container}
      onPress={() => setSelectedDate(date.date)}>
      <Text style={styled.date}>{date.daysOfTheWeek}</Text>
      <Text style={styled.date}>{date.date.slice(date.date.length - 2)}</Text>
    </TouchableOpacity>
  );
};

export default DatePicker;
