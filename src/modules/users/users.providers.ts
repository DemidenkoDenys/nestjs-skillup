import { Connection } from 'typeorm';
import { UserEntity, USER_REPOSITORY } from './';

export const userProvider = {
  provide: USER_REPOSITORY,
  useFactory: (connection: Connection) => connection.getRepository(UserEntity),
  inject: ['DATABASE_CONNECTION'],
};
