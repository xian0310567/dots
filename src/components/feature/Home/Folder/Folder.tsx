import React from 'react';

import {
  Container,
  Text,
  DescriptionBlock,
  FolderImage,
  ArrowImage,
} from './Folder.styled';

import {FolderProps} from './Folder.types';

const Folder = (props: FolderProps) => {
  return (
    <Container>
      <DescriptionBlock>
        <FolderImage />
        <Text>{props.gallery.name}</Text>
      </DescriptionBlock>
      <ArrowImage />
    </Container>
  );
};

export default Folder;
