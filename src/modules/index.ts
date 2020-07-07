import { User, UsersModule, UsersController } from './users';
import { English, EnglishModule, EnglishController } from './english';

export const entities = [
  User,
  English,
];

export const modules = [
  UsersModule,
  EnglishModule,
];

export const controllers = [
  UsersController,
  EnglishController,
];
