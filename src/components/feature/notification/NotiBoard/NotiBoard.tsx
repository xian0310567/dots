import React from 'react';

import {Container} from './NotiBoard.styled';
import Board from '@/components/feature/notification/Board';

const NotiBoard = () => {
  return (
    <Container>
      <Board></Board>
    </Container>
  );
};

export default NotiBoard;
