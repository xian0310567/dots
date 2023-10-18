import {StyleSheet} from 'react-native';

const styled = () => {
  return StyleSheet.create({
    space: {
      height: 40,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      // borderBottomWidth: 0.5,
      // borderBottomColor: '#aaa',
    },
  });
};

export default styled;
