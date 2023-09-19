import app from './app';
import { AppDataSource } from './data-source';
import { AppError } from './errors/AppError';

(async () => {
  await AppDataSource.initialize().catch((err: Error) => {
    console.error('Error during initialization', err);
    throw new AppError(500, 'Error connecting to database');
  });

  app.listen(3000, () => {
    console.log('Server is running');
  });
})();
