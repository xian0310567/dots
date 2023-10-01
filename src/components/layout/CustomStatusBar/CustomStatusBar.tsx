import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {StatusBar} from 'react-native';

import useDarkMode from '@/hooks/useDarkMode';

const CustomStatusBar = () => {
  const isDarkMode = useDarkMode();

  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
    />
  );
};

export default CustomStatusBar;
