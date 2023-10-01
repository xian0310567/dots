import React from 'react';
import {Appearance, SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import CustomStatusBar from '@/components/layout/CustomStatusBar';
import Navigator from '@/components/layout/Navigator';
import Footer from '@/components/layout/Footer';

import useDarkMode from '@/hooks/useDarkMode';

function App(): JSX.Element {
  console.log('Appearance', Appearance.getColorScheme());
  console.log('normal', useColorScheme());

  const {isDarkMode} = useDarkMode();

  const backgroundStyle = {
    backgroundColor: isDarkMode() ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <CustomStatusBar />
      <Navigator />
      <Footer />
    </SafeAreaView>
  );
}

export default App;
