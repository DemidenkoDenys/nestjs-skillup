import { BaseEntity } from 'typeorm';

export interface CreateWordDTO extends BaseEntity {
  word: string;
}
