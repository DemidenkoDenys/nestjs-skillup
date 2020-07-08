import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnglishEntity } from './';
import { EnglishService } from './english.service';

@Module({
  imports: [TypeOrmModule.forFeature([EnglishEntity])],
  exports: [EnglishService],
  providers: [EnglishService],
})
export class EnglishModule {}
