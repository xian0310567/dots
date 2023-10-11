import React from 'react';

import {View} from 'react-native';

import {DividerProps} from './lib/Divider';

import styled from './lib/styled';

const Divider = (props: DividerProps) => {
  const color = !!props.color ? props.color : '#555';

  return <View style={{...styled.divider, borderBottomColor: color}} />;
};

export default Divider;
