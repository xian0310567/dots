import React from 'react';

import {View} from 'react-native';

import {MenuProps} from './lib/Menu';

import style from './lib/styled';

const Menu = (props: MenuProps) => {
  const styled = style();

  return <View style={styled.container}>{props.children}</View>;
};

export default Menu;
