import React from 'react';

import {StatusBar} from 'react-native';

import {CustomStatusBarProps} from './lib/CustomStatusBar';

const CustomStatusBar = (props: CustomStatusBarProps) => {
  return (
    <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      barStyle={'light-content'}
      backgroundColor={props.backgroundColor}
    />
  );
};

export default CustomStatusBar;
