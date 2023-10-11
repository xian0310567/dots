import React from 'react';

import {FlatList} from 'react-native';
import ColorChip from '@/components/feature/AddEventModal/ColorChip';

import {ColorPickerProps} from './lib/ColorPicker';

import styled from './lib/styled';

const ColorPicker = (props: ColorPickerProps) => {
  return (
    <FlatList
      horizontal
      style={styled.colorPicker}
      data={props.colors}
      renderItem={color => (
        <ColorChip
          color={color.item}
          onPress={() => props.setSelectedColor(color.item.color)}
        />
      )}
      keyExtractor={color => color.color}
    />
  );
};

export default ColorPicker;
