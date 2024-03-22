import React from 'react';

import {Container} from './GalleryView.styled';
import Folder from '@/components/feature/Home/Folder';

import {GalleryViewProps} from './GalleryView.types';

const GalleryView = (props: GalleryViewProps) => {
  if (!props.gallery) return <></>;

  return (
    <Container>
      {props.gallery.map(imageContents => {
        if (!imageContents.metadata) return <Folder gallery={imageContents} />;
        return <></>;
      })}
    </Container>
  );
};

export default GalleryView;
