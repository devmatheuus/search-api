import 'express-async-errors';
import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();
const a = 'po';
app.use(express.json());
app.use(cors());

export default app;
