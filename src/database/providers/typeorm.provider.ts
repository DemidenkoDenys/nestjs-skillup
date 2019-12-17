import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../constants';
import { models } from '../../models';

export const typeOrmProviders = [{
  provide: DATABASE_CONNECTION,
  useFactory: async () => await createConnection({
    type: process.env.POSTGRES_TYPE as any,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [...models],
    synchronize: false,
  }),
}];
