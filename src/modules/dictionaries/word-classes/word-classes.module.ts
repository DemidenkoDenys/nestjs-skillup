import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WordClassesEntity } from './';
import { WordClassesService } from './word-classes.service';

@Module({
  imports: [TypeOrmModule.forFeature([WordClassesEntity])],
  exports: [WordClassesService],
  providers: [WordClassesService],
})
export class WordClassesModule {}
