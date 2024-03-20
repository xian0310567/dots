import {useState} from 'react';

import {
  Gallery,
  GetGalleryContentTypeCallback,
} from './types/useGetGalleryContentState.types';

const useGetGalleryContentState = (): GetGalleryContentTypeCallback => {
  const [gallery, setGallery] = useState<Gallery[]>();

  return {gallery, setGallery};
};

export default useGetGalleryContentState;
