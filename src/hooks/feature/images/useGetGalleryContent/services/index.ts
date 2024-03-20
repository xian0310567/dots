import getBucketService from './getImages';

import {GetGalleryContentServiceCallback} from '../types/useGetGalleryContentService.types';

const index = (): GetGalleryContentServiceCallback => {
  const {getImages} = getBucketService();

  return {getImages};
};

export default index;
