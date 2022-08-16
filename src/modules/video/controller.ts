import { Request, Response } from 'express';
import IVideoController from './interfaces/IVideoController';
import videoService from './service';

class VideoController implements IVideoController {
  videoService: typeof videoService;

  constructor() {
    this.videoService = videoService;
  }

  getChunk = async (req: Request, res: Response): Promise<Response> => {
    const {range, quality} = req.params;
    const data = await this.videoService.getChunk(range, +quality);

    return res.status(200).json({ status: 'ok', data });
  };

  getVideoList = async (req: Request, res: Response): Promise<Response> => {
    const data = await this.videoService.getVideoList();

    return res.status(200).json({ status: 'ok', data });
  };
}

export default new VideoController();
