export type CheckBoxProps = {
  style?: TouchableOpacityStyle;
  defaultColor: '#ffffff' | '#000000';
  value: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export type CheckProps = {
  isChecked: boolean;
  defaultColor: string;
};
