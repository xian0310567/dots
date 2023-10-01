import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {StatusBar, useColorScheme} from 'react-native';

const CustomStatusBar = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
    />
  );
};

export default CustomStatusBar;
