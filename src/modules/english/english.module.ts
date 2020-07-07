import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { English } from './';
import { EnglishService } from './english.service';

@Module({
  imports: [TypeOrmModule.forFeature([English])],
  exports: [EnglishService],
  providers: [EnglishService],
})
export class EnglishModule {}
