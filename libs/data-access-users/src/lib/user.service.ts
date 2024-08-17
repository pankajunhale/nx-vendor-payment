import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from '@vendor-payment/my-prisma-client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }
}
