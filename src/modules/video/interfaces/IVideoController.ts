import { Response, Request } from 'express';
import videoService from '../service';

interface IVideoController {
  videoService: typeof videoService;
  getVideoList: (req: Request, res: Response) => Promise<Response>;
  getChunk: (req: Request, res: Response) => Promise<Response>;
}

export default IVideoController;
