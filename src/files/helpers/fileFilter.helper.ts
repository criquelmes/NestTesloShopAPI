export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: (error: Error | null, acceptFile: boolean) => void,
) => {
  if (!file) return cb(new Error('No file was uploaded.'), false);
  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['png', 'jpg', 'jpeg', 'gif'];

  if (validExtensions.includes(fileExtension)) {
    return cb(null, true);
  }

  cb(null, false);
};
