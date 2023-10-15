import {StyleSheet} from 'react-native';

const styled = (selected: boolean) => {
  return StyleSheet.create({
    container: {
      borderWidth: selected ? 1.2 : 0,
      borderColor: '#aaa',
      backgroundColor: '#333',
      borderRadius: 7,
      marginRight: 5,
      paddingTop: 10,
      width: 50,
      height: 60,
    },
    date: {
      fontSize: 12,
      color: '#aaa',
      textAlign: 'center',
      marginBottom: 5,
    },
  });
};

export default styled;
