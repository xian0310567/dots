import {StyleSheet} from 'react-native';

const styled = (color: string, textColor: string) => {
  return StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    todo: {
      backgroundColor: color,
      borderRadius: 10,
      height: 60,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    text: {
      fontSize: 14,
      color: textColor,
    },
  });
};

export default styled;
