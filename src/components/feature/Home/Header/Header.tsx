import React from 'react';

import {View} from 'react-native';
import AddTodoButton from '@/components/feature/Home/AddTodoButton';

import style from './lib/styled';

const Header = () => {
  const styled = style();

  return (
    <View style={styled.space}>
      <AddTodoButton />
    </View>
  );
};

export default Header;
