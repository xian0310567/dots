import {useEffect} from 'react';
import getBucketService from './getImages';

import {GetGalleryContentStateCallback} from '../types/useGetGalleryContentState.types';
import {GetGalleryContentServiceCallback} from '../types/useGetGalleryContentService.types';

const index = (
  state: GetGalleryContentStateCallback,
): GetGalleryContentServiceCallback => {
  const {getImages} = getBucketService(state);

  useEffect(() => {
    getImages();
  }, []);

  return {getImages};
};

export default index;
