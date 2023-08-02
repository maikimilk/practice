import { Injectable } from '@nestjs/common';

class ToDo{
  constructor(
      private id: number,
      private name: string,
      private date: Date,
      private summary: string,
      private isFinished: boolean ) {
  }
  getId(): number{
    return this.id;
  }
}

@Injectable()
export class AppService {
  data:ToDo[];
  idCounter:number = 0
  getDoneTodo(): string {
    return 'get done';
  }

  getNameTodo(): string{
    return 'get Name'
  }

  addTodo(name:string , date:Date , summary:string ): number{
    const id:number = this.idCounter++;
    const toDo = new ToDo(id,name,date,summary,false);
    this.data.push(toDo)
    return id;
  }

  changeTodo(): string{
    return 'change todo'
  }

  delTodo(): string{
    return 'delete todo'
  }


}