import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers() {
    return this.httpService.get(
      'https://4ln2.developer.orkescloud.com/users/get/users/get',
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );
  }

  @Post('/users/start')
  start() {
    return this.httpService.post(
      'https://4ln2.developer.orkescloud.com/users/start',
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
        body: {
          until: '2025-12-17 17:30 GMT+07:00',
        },
      },
    );
  }
}
