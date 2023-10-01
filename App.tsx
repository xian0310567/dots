import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import CustomStatusBar from '@/components/layout/CustomStatusBar';
import Navigator from '@/components/layout/Navigator';
import Footer from '@/components/layout/Footer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: Colors.darker,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <CustomStatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <Navigator />
      <Footer />
    </SafeAreaView>
  );
}

export default App;
