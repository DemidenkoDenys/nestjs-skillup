import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ...Entity, AnyDTO, AnyParams } from './';

@Injectable()
export class ...Service {

  constructor(
    @InjectRepository(...Entity)
    private readonly repository: Repository<...Entity>,
  ) {}

  async getMethod(params: AnyParams): Promise<...Entity[]> {
    return await this.repository.find();
  }

  async postMethod(dto: ...DTO): Promise<...Entity> {
    const body: ...Entity = this.repository.create(dto);
    return await ...Entity.save(body);
  }

}
