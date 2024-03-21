import React from 'react';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import GalleryView from '@/components/feature/Home/GalleryView';

import useGetGalleryContent from '@/hooks/feature/images/useGetGalleryContent';

const Home = () => {
  const gallery = useGetGalleryContent();

  return (
    <Container>
      <Header />
      <GalleryView />
    </Container>
  );
};

export default Home;
