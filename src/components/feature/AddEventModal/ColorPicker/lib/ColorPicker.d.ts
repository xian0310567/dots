import {Colors} from '@/hooks/feature/days/useColors';

export type ColorPickerProps = {
  colors: Colors[];
  onPressChip: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};
