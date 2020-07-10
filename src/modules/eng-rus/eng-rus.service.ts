import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { EngRusEntity } from './eng-rus.model';

@Injectable()
export class EngRusService {

  constructor(
    @InjectRepository(EngRusEntity)
    private readonly repository: Repository<EngRusEntity>,
  ) {}

  async findTranslations(id: any): Promise<any> {
    return await this.repository.createQueryBuilder('translations')
      .where('translations.eng_id = :id', { id })
      .innerJoin('translations.rus_id', 'rus')
      .select('translations.id', 'id')
      .addSelect(['rus.word'])
      .getRawMany();
  }

}
