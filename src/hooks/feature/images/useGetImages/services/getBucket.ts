import {supabase} from '@/hooks/collection';

import {GetBucketCallback} from '../types/services/getImages.types';

const service = (): GetBucketCallback => {
  const getBucket = async () => {
    const {data} = await supabase.storage.getBucket('dots');

    console.log(data);
  };

  return {getBucket};
};

export default service;
