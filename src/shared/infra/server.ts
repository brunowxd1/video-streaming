import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import { errors } from 'celebrate';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';

const PORT = process.env.APP_PORT ? process.env.APP_PORT : 3000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(errors());

app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT} 🚀`);
});
