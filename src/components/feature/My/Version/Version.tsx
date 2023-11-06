import React from 'react';
import Package from '@/../package.json';

import {Space, Text} from './lib/styled';

const Version = () => {
  return (
    <Space>
      <Text>ver. {Package.version}</Text>
    </Space>
  );
};

export default Version;
