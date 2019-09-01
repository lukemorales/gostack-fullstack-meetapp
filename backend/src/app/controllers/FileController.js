import File from '../models/File';

class FileController {
  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;

      const file = await File.create({
        name,
        path,
      });

      return res.status(201).json(file);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default new FileController();
