import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorCallback} from '@/components/layout/Navigator';

import style from './lib/styled';

const AddTodoButton = () => {
  const styled = style();
  const router =
    useNavigation<NativeStackNavigationProp<NavigatorCallback, 'AddEvent'>>();

  return (
    <TouchableOpacity
      style={styled.button}
      onPress={() => router.navigate('AddEvent')}>
      <Icon name="plus" size={30} color="#888" />
    </TouchableOpacity>
  );
};

export default AddTodoButton;
