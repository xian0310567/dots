import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

import {DatePickerProps} from './lib/DatePicker';

import styled from './lib/styled';

const DatePicker = (props: DatePickerProps) => {
  const date = props.date.item;

  return (
    <TouchableOpacity style={styled.container}>
      <Text style={styled.date}>{date.daysOfTheWeek}</Text>
      <Text style={styled.date}>{date.date.slice(date.date.length - 2)}</Text>
    </TouchableOpacity>
  );
};

export default DatePicker;
