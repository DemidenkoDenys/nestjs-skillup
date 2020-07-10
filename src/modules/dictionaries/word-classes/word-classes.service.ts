import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { WordClassesEntity, WordClassesDTO, AnyParams } from './';

@Injectable()
export class WordClassesService {

  constructor(
    @InjectRepository(WordClassesEntity)
    private readonly repository: Repository<WordClassesEntity>,
  ) {}

  async getMethod(params: AnyParams): Promise<WordClassesEntity[]> {
    return await this.repository.find();
  }

   async postMethod(dto: WordClassesDTO): Promise<WordClassesEntity> {
    const body: WordClassesEntity = this.repository.create(dto);
    return await WordClassesEntity.save(body);
  }

}
