import { DataSource } from 'typeorm';
import 'dotenv/config';

export const AppDataSource = new DataSource(
  process.env.NODE_ENV === 'test'
    ? {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts'],
      }
    : {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: false,
        logging: true,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts'],
      }
);
