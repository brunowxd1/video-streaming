import { Router } from 'express';
import videoController from './controller';
import { getChunkValidator } from './validators';

const videoRoutes = Router();

videoRoutes.get('/', videoController.getVideoList);
videoRoutes.get('/chunk', getChunkValidator, videoController.getChunk);

export default videoRoutes;
