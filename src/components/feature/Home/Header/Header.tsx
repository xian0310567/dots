import React from 'react';

import {View} from 'react-native';
import AddTodoButton from '@/components/feature/Home/AddTodoButton';
import Profile from '@/components/layout/Profile';

import style from './lib/styled';

const Header = () => {
  const styled = style();

  return (
    <View style={styled.space}>
      <Profile />
      <AddTodoButton />
    </View>
  );
};

export default Header;
