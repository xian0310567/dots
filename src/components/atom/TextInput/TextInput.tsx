import React from 'react';

import {TextInput as Input} from 'react-native';
import {TextInputProps} from './lib/TextInput';

import styled from './lib/styled';

const TextInput = (props: TextInputProps) => {
  return <Input style={{...props.style, ...styled.input}} {...props} />;
};

export default TextInput;
