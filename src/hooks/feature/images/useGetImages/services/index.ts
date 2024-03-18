import getBucketService from './getBucket';

import {GetImagesServiceCallback} from '../types/useGetImagesService.types';

const index = (): GetImagesServiceCallback => {
  const {getBucket} = getBucketService();

  return {getBucket};
};

export default index;
