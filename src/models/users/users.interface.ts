import { BaseEntity } from 'typeorm';

export interface UserInterface extends BaseEntity {
  id: number;
  login: string;
  firstname: string;
  surname: string;
  birthdate: Date;
}
