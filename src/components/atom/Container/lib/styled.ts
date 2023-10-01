import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styled = (isDarkMode: boolean) => {
  return StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
    },
  });
};

export default styled;
