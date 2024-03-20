import React from 'react';

import Header from '@/components/feature/Home/Header';
import Container from '@/components/atom/Container';
import ImageGrid from '@/components/feature/Home/ImageGrid';

import useGetImages from '@/hooks/feature/images/useGetImages';

const Home = () => {
  const {getImages} = useGetImages();

  React.useEffect(() => {
    getImages();
  });

  return (
    <Container>
      <Header />
      <ImageGrid />
    </Container>
  );
};

export default Home;
