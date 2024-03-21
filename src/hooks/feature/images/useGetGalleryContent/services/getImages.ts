import {supabase} from '@/hooks/collection';

import {GetGalleryContentStateCallback} from '../types/useGetGalleryContentState.types';
import {GetImagesCallback} from '../types/services/getImages.types';

const service = (state: GetGalleryContentStateCallback): GetImagesCallback => {
  const getImages = async () => {
    const {data} = await supabase.storage.from('dots').list();

    if (data)
      state.setGallery(() =>
        data.filter(response => {
          if (response.name == '.emptyFolderPlaceholder') return false;
          return true;
        }),
      );
  };

  return {getImages};
};

export default service;
