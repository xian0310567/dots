import React from 'react';

import Container from '@/components/atom/Container';
import WebView from 'react-native-webview';

const Nofitication = () => {
  return (
    <Container>
      <WebView source={{uri: 'http://localhost:3000/'}} />
    </Container>
  );
};

export default Nofitication;
