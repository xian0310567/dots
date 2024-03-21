import React from 'react';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import ImageGrid from '@/components/feature/Home/ImageGrid';

import useGetGalleryContent from '@/hooks/feature/images/useGetGalleryContent';

const Home = () => {
  const gallery = useGetGalleryContent();

  return (
    <Container>
      <Header />
      <ImageGrid />
    </Container>
  );
};

export default Home;
