import { Connection } from 'typeorm';
import { User, USER_REPOSITORY } from './';

export const userProvider = {
  provide: USER_REPOSITORY,
  useFactory: (connection: Connection) => connection.getRepository(User),
  inject: ['DATABASE_CONNECTION'],
};
