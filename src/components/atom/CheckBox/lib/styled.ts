import {StyleSheet} from 'react-native';

const styled = (color: string) => {
  return StyleSheet.create({
    checkbox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: color,
      borderRadius: 15,
      width: 30,
      height: 30,
    },
  });
};

export default styled;
