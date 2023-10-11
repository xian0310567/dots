import React from 'react';

import {View} from 'react-native';
import HeaderSaveButton from '@/components/feature/AddEventModal/HeaderSaveButton';

import useDarkMode from '@/hooks/feature/days/useDarkMode';
import {useNavigation} from '@react-navigation/native';

import {HeaderProps} from './lib/Header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorCallback} from '@/components/layout/Navigator';

import styled from './lib/styled';

const Header = (props: HeaderProps) => {
  const router = useNavigation<NativeStackNavigationProp<NavigatorCallback>>();

  const style = styled(useDarkMode());

  return (
    <View style={style.container}>
      <HeaderSaveButton
        onPress={() => {
          router.navigate('Home');
          props.addTodo();
        }}
      />
    </View>
  );
};

export default Header;
