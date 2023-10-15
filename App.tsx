import {Colors} from 'react-native/Libraries/NewAppScreen';

import {RecoilRoot} from 'recoil';
import {SafeAreaView} from 'react-native';
import InitializerEffector from '@/components/provider/InitializerEffector';
import CustomStatusBar from '@/components/layout/CustomStatusBar';
import Navigator from '@/components/layout/Navigator';
import Footer from '@/components/layout/Footer';

import useDarkMode from '@/hooks/util/useDarkMode';

function App(): JSX.Element {
  const isDarkMode = useDarkMode();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <RecoilRoot>
      <InitializerEffector>
        <SafeAreaView style={backgroundStyle}>
          <CustomStatusBar />
          <Navigator />
          <Footer />
        </SafeAreaView>
      </InitializerEffector>
    </RecoilRoot>
  );
}

export default App;
