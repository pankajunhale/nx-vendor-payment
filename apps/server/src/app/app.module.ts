import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataAccessUsersModule } from '@vendor-payment/data-access-users';

@Module({
  imports: [DataAccessUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
