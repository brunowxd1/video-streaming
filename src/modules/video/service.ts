import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import fileMetadaParser from '@shared/files/FileMetadaParser';

class VideoService {
  #getFiles = () => {
    const filesPath = path.join(__dirname, '..', '..', '..', 'static');
    const files = fs.readdirSync(filesPath);

    return files.map(file => ({
      path: path.join(filesPath, file),
      name: file,
    }));
  };

  getChunk = async (range: string, quality: number) => {};

  getVideoList = async () => {
    const files = this.#getFiles();

    const filesMetadata = await fileMetadaParser.run(files);

    const parsedResponse = filesMetadata.map((data: any) => {
      const { width, height, display_aspect_ratio, duration, nb_frames, tags } =
        data.streams[0];

      const minutes = Math.floor(duration / 60);
      const seconds = (duration - minutes * 60).toPrecision(2);
      const parsedDuration = `${minutes}:${seconds}`;

      const language = tags.language;

      return {
        name: data.name,
        width,
        height,
        duration: parsedDuration,
        display_aspect_ratio,
        nb_frames,
        language,
      };
    });

    return parsedResponse;
  };
}

export default new VideoService();
