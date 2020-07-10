import { BaseEntity } from 'typeorm';

export interface AnyDTO extends BaseEntity {
  key: string;
}
