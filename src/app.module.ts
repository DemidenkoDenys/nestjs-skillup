import { Module } from '@nestjs/common';
import { WebsocketGateway } from './gateways';
import { DatabaseModule } from './modules/database.module';

import { Users } from './database';
import { UserController } from './controllers/user.controller';
import { UserService } from './controllers/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    WebsocketGateway,
    {
      provide: 'user-providers',
      useValue: Users,
    },
  ],
})
export class AppModule {}
