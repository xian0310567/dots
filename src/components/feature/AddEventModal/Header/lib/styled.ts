import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styled = (isDarkMode: boolean) => {
  return StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingHorizontal: 30,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });
};

export default styled;
