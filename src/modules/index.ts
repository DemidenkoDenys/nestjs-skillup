import { UserEntity, UsersModule, UsersController } from './users';
import { EnglishEntity, EnglishModule, EnglishController } from './english';
import { RussianEntity, RussianModule, RussianController } from './russian';
import { EngRusEntity, EngRusModule, EngRusController } from './eng-rus';

export const entities = [
  UserEntity,
  EngRusEntity,
  EnglishEntity,
  RussianEntity,
];

export const modules = [
  UsersModule,
  EngRusModule,
  EnglishModule,
  RussianModule,
];

export const controllers = [
  UsersController,
  EngRusController,
  EnglishController,
  RussianController,
];
