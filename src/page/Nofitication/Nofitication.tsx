import React from 'react';

import Container from '@/components/atom/Container';
import WebView from 'react-native-webview';

const Nofitication = () => {
  return (
    <Container>
      <WebView source={{uri: 'http://localhost:80/notification'}} />
    </Container>
  );
};

export default Nofitication;
