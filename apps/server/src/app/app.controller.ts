import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { UserService } from '@vendor-payment/data-access-users';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/users')
  getUsers() {
    return this.userService.findAllUsers();
  }
}
