import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { appRoutes } from './routes/index.routes';

const app: Express = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later',
});

app.use(express.json());
app.use(limiter);
app.use(cors());
appRoutes(app);

export default app;
