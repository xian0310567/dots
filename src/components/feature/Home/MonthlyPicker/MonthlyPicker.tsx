import React, {useRef} from 'react';
import {useRecoilValue} from 'recoil';

import {View, FlatList, Button} from 'react-native';
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
        showsHorizontalScrollIndicator={false}
        // pagingEnabled={true}
        renderItem={date => (
          <DatePicker date={date} selectedDate={selectedDate} />
        )}
        keyExtractor={item => item.date}
        // initialScrollIndex={props.date.length - 1}
        ListEmptyComponent={<View></View>}
      />
    </View>
  );
};

export default MonthlyPicker;
