import getBucketService from './getImages';

import {GetImagesServiceCallback} from '../types/useGetImagesService.types';

const index = (): GetImagesServiceCallback => {
  const {getImages} = getBucketService();

  return {getImages};
};

export default index;
