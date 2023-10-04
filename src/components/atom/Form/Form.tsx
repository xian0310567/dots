import {View} from 'react-native';

import Item from './compound/Item';

import {FormProps} from './lib/Form';

import styled from './lib/styled';

const Form = (props: FormProps) => {
  return <View style={styled.container}>{props.children}</View>;
};

Form.Item = Item;

export default Form;
