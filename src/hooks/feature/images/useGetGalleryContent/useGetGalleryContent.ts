import useGetGalleryContentState from './useGetGalleryContentState';
import useGetGalleryContentService from './services';

import {GetGalleryContentCallback} from './types/useGetGalleryContent.types';

const useGetImages = (): GetGalleryContentCallback => {
  const state = useGetGalleryContentState();
  const service = useGetGalleryContentService(state);

  return {...state, ...service};
};

export default useGetImages;
