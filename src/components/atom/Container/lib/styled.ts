import {StyleSheet} from 'react-native';
import {ContainerProps} from './Container';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styled = (props: ContainerProps & {isDarkMode: boolean}) => {
  return StyleSheet.create({
    container: {
      padding: props.padding,
      backgroundColor: props.isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
    },
  });
};

export default styled;
