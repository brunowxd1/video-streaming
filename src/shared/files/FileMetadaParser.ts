import ffprobe from 'ffprobe';
import ffprobeStatic from 'ffprobe-static';

class FileMetadaParser {
  run = async (files: Array<{ path: string; name: string }>) => {
    return Promise.all(
      files.map(file => {
        return new Promise((resolve, reject) => {
          ffprobe(file.path, { path: ffprobeStatic.path }, (err, info) => {
            if (err) reject(err);
            resolve({ name: file.name, ...info });
          });
        });
      }),
    );
  };
}

export default new FileMetadaParser();
