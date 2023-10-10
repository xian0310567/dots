import {StyleSheet} from 'react-native';

const styled = StyleSheet.create({
  container: {
    padding: 4,
    paddingHorizontal: 8,
    paddingRight: 12,
    maxHeight: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#aaa',
  },
});

export default styled;
