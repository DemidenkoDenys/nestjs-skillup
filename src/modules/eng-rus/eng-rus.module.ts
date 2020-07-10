import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EngRusEntity } from './eng-rus.model';
import { EngRusService } from './eng-rus.service';

@Module({
  imports: [TypeOrmModule.forFeature([EngRusEntity])],
  exports: [EngRusService],
  providers: [EngRusService],
})
export class EngRusModule {}
