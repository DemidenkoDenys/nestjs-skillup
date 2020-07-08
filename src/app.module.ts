import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { modules, controllers } from './modules';

import { WebsocketGateway } from './gateways';

@Module({
  controllers: [
    ...controllers,
  ],
  imports: [
    DatabaseModule,
    ...modules,
  ],
  providers: [
    WebsocketGateway,
  ],
})
export class AppModule {}
