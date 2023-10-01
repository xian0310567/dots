import React from 'react';

import {View} from 'react-native';

import useDarkMode from '@/hooks/useDarkMode';

import styled from './lib/styled';

const Container = () => {
  const isDarkMode = useDarkMode();

  return <View style={styled(isDarkMode).container}></View>;
};

export default Container;
