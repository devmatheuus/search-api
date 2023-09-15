import { AppDataSource } from './data-source';
import app from './app';

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error('Error during initialization', err);
    return;
  });

  app.listen(3000, () => {
    console.log('Server is running');
  });
})();
