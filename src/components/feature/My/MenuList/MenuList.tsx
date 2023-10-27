import React from 'react';

import {Container, Space} from './lib/styled';
import Menu from '@/components/feature/My/Menu';

import {MenuListProps} from './lib/MenuList';

const MenuList = (props: MenuListProps) => {
  return (
    <Container>
      <Space>
        {props.systemMenus.map(menu => (
          <Menu key={menu.key}>{menu.title}</Menu>
        ))}
      </Space>
    </Container>
  );
};

export default MenuList;
