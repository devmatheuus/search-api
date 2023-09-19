import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { appRoutes } from './routes/index.routes';
import { errorMiddleware } from './middlewares/error.middleware';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerOptions } from './documentation/swagger-settings';
import swaggerUi from 'swagger-ui-express';

const app: Express = express();

// Protection setting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later',
});

// Docs settings
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Global Middlewares
app.use(express.json());
app.use(limiter);
app.use(cors());
appRoutes(app);
app.use(errorMiddleware);

export default app;
