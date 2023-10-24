import React, {useRef} from 'react';
import {useRecoilValue} from 'recoil';

import {View, FlatList, Button} from 'react-native';
import DatePicker from '@/components/feature/Home/DatePicker';

import {selectedDateState} from '@/store/selectedDate';

import {MonthlyPickerProps} from './lib/MonthlyPicker';

import styled from './lib/styled';

const MonthlyPicker = (props: MonthlyPickerProps) => {
  const selectedDate = useRecoilValue(selectedDateState);

  const scrollView = useRef<FlatList>(null);

  return (
    <View style={styled.container}>
      <FlatList
        ref={scrollView}
        horizontal
        data={props.date}
        showsHorizontalScrollIndicator={false}
        renderItem={date => (
          <DatePicker date={date} selectedDate={selectedDate} />
        )}
        keyExtractor={item => item.date}
        ListEmptyComponent={<View></View>}
        onContentSizeChange={() => {
          scrollView.current?.scrollToEnd({animated: true});
        }}
      />
    </View>
  );
};

export default MonthlyPicker;
