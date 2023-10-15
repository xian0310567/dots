import {ListRenderItemInfo} from 'react-native';
import {GetAllDatesInThisMonthCallback} from '@/hooks/feature/days/useDays';

export interface DatePickerProps {
  date: ListRenderItemInfo<GetAllDatesInThisMonthCallback>;
  selectedDate?: string;
}
