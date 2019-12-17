import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './models';
import { WebsocketGateway } from './gateways';
import { DatabaseModule } from './database/database.module';
import { AppController } from './controllers/app.controller';

@Module({
  controllers: [
    AppController,
  ],
  imports: [
    TypeOrmModule.forRoot(),
    // DatabaseModule,
    UsersModule,
  ],
  providers: [
    WebsocketGateway,
  ],
})
export class AppModule {}
