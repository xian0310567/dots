import {View} from 'react-native';

import {ItemProps} from './lib/Item';

import styled from './lib/styled';

const Item = (props: ItemProps) => {
  return <View style={styled.container}>{props.children}</View>;
};

export default Item;
