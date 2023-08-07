import { Controller, Delete, Get, Post, Body, Param } from '@nestjs/common';
import { AppService, ToDo } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/done')
  getDoneTodo(): ToDo[] {
    return this.appService.getDoneTodo();
  }

  @Get('/name/:name')
  getNameTodo(@Param('name') name: string): ToDo[] {
    return this.appService.getNameTodo(name);
  }

  @Post('/add')
  addTodo(
      @Body('name') name: string,
      @Body('date') date: Date,
      @Body('summary') summary: string,
  ): number {
    return this.appService.addTodo(name, date, summary);
  }

  @Post('/change/:id')
  changeTodo(
      @Param('id') id: number,
      @Body('name') name: string,
      @Body('date') date: Date,
      @Body('summary') summary: string,
      @Body('isFinished') isFinished: boolean,
  ): string {
    return this.appService.changeTodo(id, name, date, summary, isFinished);
  }

  @Delete('/delete/:id')
  delTodo(
      @Param('id') id: number,
  ): string {
    return this.appService.delTodo(id);
  }
}
