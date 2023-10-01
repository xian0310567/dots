import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {RecoilRoot} from 'recoil';
import {SafeAreaView} from 'react-native';
import CustomStatusBar from '@/components/layout/CustomStatusBar';
import Navigator from '@/components/layout/Navigator';
import Footer from '@/components/layout/Footer';

import useDarkMode from '@/hooks/useDarkMode';

function App(): JSX.Element {
  const isDarkMode = useDarkMode();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <RecoilRoot>
      <SafeAreaView style={backgroundStyle}>
        <CustomStatusBar />
        <Navigator />
        <Footer />
      </SafeAreaView>
    </RecoilRoot>
  );
}

export default App;
