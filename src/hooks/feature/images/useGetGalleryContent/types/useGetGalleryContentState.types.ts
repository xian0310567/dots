import {FileObject} from '@supabase/storage-js';

export type GetGalleryContentStateCallback = {
  gallery: FileObject[] | undefined;
  setGallery: React.Dispatch<React.SetStateAction<FileObject[] | undefined>>;
};
