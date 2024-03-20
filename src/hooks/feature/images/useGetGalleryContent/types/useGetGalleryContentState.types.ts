export type GetGalleryContentTypeCallback = {
  gallery: Gallery[] | undefined;
  setGallery: React.Dispatch<React.SetStateAction<Gallery[] | undefined>>;
};

export type Gallery = Folder | Image;

export type Folder = {
  created_at: null;
  id: null;
  last_accessed_at: null;
  metadata: null;
  name: string;
  updated_at: null;
};

export type Image = {
  created_at: string;
  id: string;
  last_accessed_at: string;
  metadata: {
    cacheControl: string;
    contentLength: number;
    eTag: string;
    httpStatusCode: number;
    lastModified: string;
    mimetype: string;
    size: number;
  };
  name: string;
  updated_at: string;
};
