import React from 'react';

import {FlatList} from 'react-native';
import ColorChip from '@/components/feature/AddEventModal/ColorChip';

import {ColorPickerProps} from './lib/ColorPicker';

import styled from './lib/styled';

const ColorPicker = (props: ColorPickerProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{...props.style, ...styled.colorPicker}}
      data={props.colors}
      renderItem={color => (
        <ColorChip
          color={color.item}
          onPress={() => props.onPressChip(color.item.color)}
        />
      )}
      keyExtractor={color => color.color}
    />
  );
};

export default ColorPicker;
