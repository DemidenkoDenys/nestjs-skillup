import { BaseEntity } from 'typeorm';

export interface UserInterface extends BaseEntity {
  login: string;
  firstname: string;
  surname: string;
  birthdate: Date;
}
