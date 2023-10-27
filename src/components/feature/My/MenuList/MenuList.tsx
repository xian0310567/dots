import React from 'react';

import {Container} from './lib/styled';
import Space from '@/components/atom/Space';
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
