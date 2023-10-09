import React from 'react';

import {TextInput as Input, TextInputProps} from 'react-native';

import styled from './lib/styled';

const TextInput = (props: TextInputProps) => {
  return <Input style={styled.input} {...props} />;
};

export default TextInput;
