import { BaseEntity } from 'typeorm';

export interface CreateUserDTO extends BaseEntity {
  login: string;
  firstname: string;
  surname: string;
  birthdate: Date;
}
