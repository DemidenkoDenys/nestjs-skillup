import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { EngRusEntity } from '.';

@Injectable()
export class EngRusService {

  constructor(
    @InjectRepository(EngRusEntity)
    private readonly repository: Repository<EngRusEntity>,
  ) {}

}
