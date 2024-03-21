import {useState} from 'react';

import {FileObject} from '@supabase/storage-js';
import {GetGalleryContentStateCallback} from './types/useGetGalleryContentState.types';

const useGetGalleryContentState = (): GetGalleryContentStateCallback => {
  const [gallery, setGallery] = useState<FileObject[]>();

  return {gallery, setGallery};
};

export default useGetGalleryContentState;
