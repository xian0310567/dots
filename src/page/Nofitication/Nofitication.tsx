import React from 'react';
// import {SUPABASE_URL} from '@env';

import Container from '@/components/atom/Container';
import NotiBoard from '@/components/feature/notification/NotiBoard';

import useGetNotification from '@/hooks/feature/notification/useGetNotification';

const Nofitication = () => {
  const notice = useGetNotification();

  return (
    <Container>
      <NotiBoard></NotiBoard>
    </Container>
  );
};

export default Nofitication;
