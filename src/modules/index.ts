import { UserEntity, UsersModule, UsersController } from './users';
import { EnglishEntity, EnglishModule, EnglishController } from './english';
import { RussianEntity, RussianModule, RussianController } from './russian';

export const entities = [
  UserEntity,
  EnglishEntity,
  RussianEntity,
];

export const modules = [
  UsersModule,
  EnglishModule,
  RussianModule,
];

export const controllers = [
  UsersController,
  EnglishController,
  RussianController,
];
