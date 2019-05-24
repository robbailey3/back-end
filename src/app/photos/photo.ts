export interface Photo {
  photoID: number;
  path: string;
  thumbnail_path: string;
  caption: string;
  albumID: number;
  exif: string;
  edit_mode?: boolean;
  menu_active?: boolean;
  is_selected?: boolean;
}
