import videoRoutes from '@modules/video/routes';
import { Router } from 'express';

const routes = Router();

routes.use('/video', videoRoutes);

export default routes;