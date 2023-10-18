import React, {useState} from 'react';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import style from './lib/styled';

import {CheckBoxProps, CheckProps} from './lib/CheckBox';

const CheckBox = (props: CheckBoxProps) => {
  const color =
    props.defaultColor == '#ffffff'
      ? 'rgba(255, 255, 255, 0.5)'
      : 'rgba(0, 0, 0, 0.5)';

  const styled = style(color);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity
      style={[styled.checkbox, props.style]}
      onPress={() => {
        setIsChecked(check => !check);
      }}>
      <Check isChecked={isChecked} defaultColor={color} />
    </TouchableOpacity>
  );
};

const Check = (props: CheckProps) => {
  if (!props.isChecked) return <></>;

  return <Icon name="check" size={15} color={props.defaultColor} />;
};

export default CheckBox;
