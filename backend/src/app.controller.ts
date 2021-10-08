import { Controller, Get } from '@nestjs/common';
import { AppService, OctokitRequestResponse } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): Promise<Record<string, Record<string, any>>> {
    return this.appService.getGithubPath();
  }
}
