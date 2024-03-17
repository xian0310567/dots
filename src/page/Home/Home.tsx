import React from 'react';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import ImageGrid from '@/components/feature/Home/ImageGrid';

const Home = () => {
  return (
    <Container>
      <Header />
      <ImageGrid />
    </Container>
  );
};

export default Home;
