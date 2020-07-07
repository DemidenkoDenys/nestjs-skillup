import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RussianEntity } from './';
import { RussianService } from './russian.service';

@Module({
  imports: [TypeOrmModule.forFeature([RussianEntity])],
  exports: [RussianService],
  providers: [RussianService],
})
export class RussianModule {}
