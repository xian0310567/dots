import {StyleSheet, Appearance} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const isDarkMode = Appearance.getColorScheme() === 'dark';

const styled = StyleSheet.create({
  container: {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  },
});

export default styled;
