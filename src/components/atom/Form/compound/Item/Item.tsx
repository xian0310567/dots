import {View, Text} from 'react-native';

import {ItemProps} from './lib/Item';

import styled from './lib/styled';

const Item = (props: ItemProps) => {
  const Label = () => {
    if (props.label) return <Text style={styled.label}>{props.label}</Text>;
    return <></>;
  };

  return (
    <View style={styled.container}>
      <Label />
      {props.children}
    </View>
  );
};

export default Item;
