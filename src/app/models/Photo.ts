type photoType = 'gallery' | 'carousel' | 'hidden';

export type Photo = {
  title: string;
  subtitle: string;
  uuid: string;
  type: photoType;
  pictureUrl: string;
};
