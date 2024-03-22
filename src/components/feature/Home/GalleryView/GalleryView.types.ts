import {FileObject} from '@supabase/storage-js';

export type GalleryViewProps = {
  gallery: FileObject[] | undefined;
};
