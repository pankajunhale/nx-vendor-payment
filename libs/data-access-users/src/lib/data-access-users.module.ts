import { Module } from '@nestjs/common';
import { MyPrismaClientModule } from '@vendor-payment/my-prisma-client';
import { UserService } from './user.service';

@Module({
  controllers: [],
  providers: [UserService],
  exports: [UserService],
  imports: [MyPrismaClientModule],
})
export class DataAccessUsersModule {}
