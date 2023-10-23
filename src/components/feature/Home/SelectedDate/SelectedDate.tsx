import {useRecoilValue} from 'recoil';

import {Text} from 'react-native';

import {selectedDateState} from '@/store/selectedDate';

import style from './lib/styled';

const SelectedDate = () => {
  const styled = style();

  const selectedDate = useRecoilValue(selectedDateState);

  return <Text style={styled.date}>{selectedDate}</Text>;
};

export default SelectedDate;
