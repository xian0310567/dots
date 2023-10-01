import React from 'react';

import {View, FlatList} from 'react-native';
import DatePicker from '@/components/feature/Home/DatePicker';

import {MonthlyPickerProps} from './lib/MonthlyPicker';

import styled from './lib/styled';

const MonthlyPicker = (props: MonthlyPickerProps) => {
  return (
    <View style={styled.container}>
      <FlatList
        horizontal
        data={props.date}
        renderItem={date => <DatePicker date={date} />}
        keyExtractor={item => item.date}
      />
    </View>
  );
};

export default MonthlyPicker;
