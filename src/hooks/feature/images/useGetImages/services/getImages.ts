import {supabase} from '@/hooks/collection';

import {GetImagesCallback} from '../types/services/getImages.types';

const service = (): GetImagesCallback => {
  const getImages = async () => {
    const {data} = await supabase.storage.from('dots').list();

    console.log(data);
  };

  return {getImages};
};

export default service;
