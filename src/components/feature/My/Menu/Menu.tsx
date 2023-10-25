import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Space, Text} from './lib/styled';

import {MenuProps} from './lib/Menu';

const Menu = (props: MenuProps) => {
  return (
    <Container onPress={props.onPress}>
      <Space>
        <Text>{props.children}</Text>
        <Icon name="chevron-right" size={26} color="#adadad" />
      </Space>
    </Container>
  );
};

export default Menu;
