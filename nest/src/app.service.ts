import { Injectable } from '@nestjs/common';

export class ToDo {
  constructor(
      private id: number,
      private name: string,
      private date: Date,
      private summary: string,
      private isFinished: boolean,
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDate(): Date {
    return this.date;
  }

  getSummary(): string {
    return this.summary;
  }

  isTaskFinished(): boolean {
    return this.isFinished;
  }

  // Update ToDo properties
  updateToDo(name: string, date: Date, summary: string, isFinished: boolean) {
    this.name = name;
    this.date = date;
    this.summary = summary;
    this.isFinished = isFinished;
  }
}

@Injectable()
export class AppService {
  data: ToDo[] = []; // Initialize the data array
  idCounter: number = 0;

  getDoneTodo(): ToDo[] {
    return this.data.filter((todo) => todo.isTaskFinished());
  }

  getNameTodo(name: string): ToDo[] {
    return this.data.filter((todo) => todo.getName() === name);
  }

  addTodo(name: string, date: Date, summary: string): number {
    const id: number = this.idCounter++;
    const toDo = new ToDo(id, name, date, summary, false);
    this.data.push(toDo);
    return id;
  }

  changeTodo(id: number, name: string, date: Date, summary: string, isFinished: boolean): string {
    const todoToUpdate = this.data.find((todo) => todo.getId() === id);
    if (!todoToUpdate) {
      return 'ToDo item not found';
    }

    todoToUpdate.updateToDo(name, date, summary, isFinished);
    return 'ToDo item updated successfully';
  }

  delTodo(id: number): string {
    const initialLength = this.data.length;
    this.data = this.data.filter((todo) => todo.getId() !== id);
    return this.data.length === initialLength ? 'ToDo item not found' : 'ToDo item deleted successfully';
  }
}
