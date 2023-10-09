import {StyleSheet} from 'react-native';

const styled = StyleSheet.create({
  container: {
    padding: 4,
    paddingHorizontal: 8,
    maxHeight: 33,
    height: 33,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#aaa',
  },
});

export default styled;
