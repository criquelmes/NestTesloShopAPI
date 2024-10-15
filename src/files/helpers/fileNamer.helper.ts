import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  cb,
) => {
  if (!file) return cb(new Error('No file was uploaded.'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtension}`;

  cb(null, fileName);
};
