import React from 'react';
import {useRecoilValue} from 'recoil';

import {View, FlatList} from 'react-native';
import DatePicker from '@/components/feature/Home/DatePicker';

import {selectedDateState} from '@/store/selectedDate';

import {MonthlyPickerProps} from './lib/MonthlyPicker';

import styled from './lib/styled';

const MonthlyPicker = (props: MonthlyPickerProps) => {
  const selectedDate = useRecoilValue(selectedDateState);

  return (
    <View style={styled.container}>
      <FlatList
        horizontal
        data={props.date}
        renderItem={date => (
          <DatePicker date={date} selectedDate={selectedDate} />
        )}
        keyExtractor={item => item.date}
      />
    </View>
  );
};

export default MonthlyPicker;
