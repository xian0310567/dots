import React from 'react';
import {Appearance, SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import CustomStatusBar from '@/components/layout/CustomStatusBar';
import Navigator from '@/components/layout/Navigator';
import Footer from '@/components/layout/Footer';

Appearance.setColorScheme('dark');

function App(): JSX.Element {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  console.log('Appearance', Appearance.getColorScheme());
  console.log('normal', useColorScheme());

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
