import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import styled from './lib/styled';

import {HeaderSaveButtonProps} from './lib/HeaderSaveButton';

const HeaderSaveButton = (props: HeaderSaveButtonProps) => {
  const style = styled();

  return (
    <TouchableOpacity style={style.button} onPress={props.onPress}>
      <Icon name="check" size={20} color="#888" />
    </TouchableOpacity>
  );
};

export default HeaderSaveButton;
