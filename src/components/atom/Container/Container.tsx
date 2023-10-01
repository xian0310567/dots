import React from 'react';

import {View} from 'react-native';

import useDarkMode from '@/hooks/useDarkMode';

import {ContainerProps} from './lib/Container';

import styled from './lib/styled';

const Container = (props: ContainerProps) => {
  const isDarkMode = useDarkMode();

  return <View style={styled(isDarkMode).container}>{props.children}</View>;
};

export default Container;
