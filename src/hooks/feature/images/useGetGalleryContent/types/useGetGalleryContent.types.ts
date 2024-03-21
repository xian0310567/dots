import {GetGalleryContentStateCallback} from './useGetGalleryContentState.types';
import {GetGalleryContentServiceCallback} from './useGetGalleryContentService.types';

export type GetGalleryContentCallback = GetGalleryContentStateCallback &
  GetGalleryContentServiceCallback;
