import useGetGalleryContentService from './services';

import {GetGalleryContentCallback} from './types/useGetGalleryContent.types';

const useGetImages = (): GetGalleryContentCallback => {
  const service = useGetGalleryContentService();

  return {...service};
};

export default useGetImages;
