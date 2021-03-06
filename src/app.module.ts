import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { modules, controllers } from './modules';

import { WebsocketGateway } from './gateways';

@Module({
  controllers: [
    ...controllers,
  ],
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    ...modules,
  ],
  providers: [
    WebsocketGateway,
  ],
})
export class AppModule {}
