import React from 'react';

import Container from '@/components/atom/Container';
import NotiBoard from '@/components/feature/notification/NotiBoard';

import useGetNotification from '@/hooks/feature/notification/useGetNotification';

const Nofitication = () => {
  // const notice = useGetNotification();

  console.log(process.env.SUPABASE_URL);

  return (
    <Container>
      <NotiBoard></NotiBoard>
    </Container>
  );
};

export default Nofitication;
