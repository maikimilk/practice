import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {name} from "supertest";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDoneTodo(): ToDo[] {
    return this.appService.getDoneTodo();
  }

  @Get()
  getNameTodo(name:string): ToDo[]{
    return this.appService.getNameTodo();
  }

  @Post()
  addTodo(name:string,date:Date,summary:string): number {
    return this.appService.addTodo(name, date, summary);
  }

  @Post()
  changeTodo(): string {
    return this.appService.changeTodo( id, name, date, summary, isFinished);
  }

  @Delete()
  delTodo(): string {
    return this.appService.delTodo(id);
  }
}