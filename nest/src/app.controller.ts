import {Controller, Delete, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDoneTodo(): string {
    return this.appService.getDoneTodo();
  }

  @Get()
  getNameTodo(): string{
    return this.appService.getNameTodo();
  }

  @Post()
  addTodo(): string{
    return this.appService.addTodo();
  }

  @Post()
  changeTodo(): string{
    return this.appService.changeTodo();
  }

  @Delete()
  delTodo(): string{
    return this.appService.delTodo();
  }
}