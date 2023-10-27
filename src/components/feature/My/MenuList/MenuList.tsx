import React from 'react';

import {Container} from './lib/styled';
import Menu from '@/components/feature/My/Menu';

import {MenuListProps} from './lib/MenuList';

const MenuList = (props: MenuListProps) => {
  return (
    <Container>
      {props.systemMenus.map(menu => (
        <Menu key={menu.key}>{menu.title}</Menu>
      ))}
    </Container>
  );
};

export default MenuList;
