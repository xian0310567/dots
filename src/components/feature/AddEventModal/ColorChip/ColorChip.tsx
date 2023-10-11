import React from 'react';

import {View, TouchableOpacity} from 'react-native';

import {ColorChipProps} from './lib/ColorChip';

import styled from './lib/styled';

const ColorChip = (props: ColorChipProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styled.chip, backgroundColor: props.color.color}}></View>
    </TouchableOpacity>
  );
};

export default ColorChip;
