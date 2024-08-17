import { Module } from '@nestjs/common';
import { MyPrismaClientModule } from '@vendor-payment/my-prisma-client';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [MyPrismaClientModule],
})
export class DataAccessUsersModule {}
