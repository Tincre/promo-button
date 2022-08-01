export interface CloudinaryOptions {
  cloudName: string;
  uploadPreset: string;
  folder: string;
  multiple: boolean;
}
export interface Options {
  cloudinary: CloudinaryOptions;
}
const options: Options = {
  cloudinary: {
    cloudName: 'b00st',
    uploadPreset: 'uscb5ifq',
    folder: 'B00STButton',
    multiple: true,
  },
};

export default options;
