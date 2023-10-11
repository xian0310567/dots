import {Colors} from '@/hooks/feature/days/useColors';

export type ColorChipProps = {
  color: Colors;
  onPress?: (event: GestureResponderEvent) => void;
};
