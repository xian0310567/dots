import React from 'react';

import {View} from 'react-native';
import Profile from '@/components/layout/Profile';
import SelectedDate from '@/components/feature/Home/SelectedDate';
import AddTodoButton from '@/components/feature/Home/AddTodoButton';

import style from './lib/styled';

const Header = () => {
  const styled = style();

  return (
    <View style={styled.space}>
      <View style={styled.alignSpace}>
        <Profile />
        <SelectedDate />
      </View>
      <AddTodoButton />
    </View>
  );
};

export default Header;
