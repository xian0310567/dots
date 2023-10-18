import {StyleSheet} from 'react-native';

const styled = (color: string, textColor: string) => {
  return StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    todo: {
      backgroundColor: color,
      borderRadius: 10,
      height: 70,
      paddingHorizontal: 20,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    text: {
      fontSize: 14,
      marginLeft: 15,
      color: textColor,
    },
  });
};

export default styled;
