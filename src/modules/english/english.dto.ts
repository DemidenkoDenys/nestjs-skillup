import { BaseEntity } from 'typeorm';

export interface CreateEnglishDTO extends BaseEntity {
  word: string;
}
