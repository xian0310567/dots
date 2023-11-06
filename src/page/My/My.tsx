import React from 'react';

import Container from '@/components/atom/Container';
import UserAccount from '@/components/feature/My/UserAccount';
import MenuList from '@/components/feature/My/MenuList';
import Version from '@/components/feature/My/Version';

import useSystemMenu from '@/hooks/feature/My/useSystemMenu';

const My = () => {
  const {systemMenus} = useSystemMenu();

  return (
    <Container>
      {/* <UserAccount /> */}
      <MenuList systemMenus={systemMenus} />
      <Version />
    </Container>
  );
};

export default My;
