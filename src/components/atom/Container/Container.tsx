import React from 'react';

import {View} from 'react-native';

import useDarkMode from '@/hooks/util/useDarkMode';

import {ContainerProps} from './lib/Container';

import styled from './lib/styled';

const Container = (props: ContainerProps) => {
  const isDarkMode = useDarkMode();

  return (
    <View style={styled({...props, isDarkMode}).container}>
      {props.children}
    </View>
  );
};

export default Container;
