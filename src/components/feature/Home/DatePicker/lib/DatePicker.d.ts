import {ListRenderItemInfo} from 'react-native';
import {useDaysCallback} from '@/hooks/useDays';

export interface DatePickerProps {
  date: ListRenderItemInfo<useDaysCallback>;
}
