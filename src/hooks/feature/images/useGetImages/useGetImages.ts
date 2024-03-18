import useGetImagesService from './services';

import {GetImagesCallback} from './types/useGetImages.types';

const useGetImages = (): GetImagesCallback => {
  const service = useGetImagesService();

  return {...service};
};

export default useGetImages;
