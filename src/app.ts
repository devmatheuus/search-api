import 'express-async-errors';
import express, { Application } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app: Application = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later',
});

app.use(express.json());
app.use(limiter);
app.use(cors());

export default app;
