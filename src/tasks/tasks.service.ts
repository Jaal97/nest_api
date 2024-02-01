import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './task.entity';
import {v4} from 'uuid';

//Este archivo va a contener todos nuestros metodos que podremos llamar desde cualquier parte de la aplicación

@Injectable()
export class TasksService {

//Simula una base de datos
    private tasks: Task[] =[
        {
          id: '1',
          title: 'first task',
          description: 'some task',
          status: TaskStatus.PENDING,
        },
      ];

  getAllTasks() {
    return this.tasks;
  }


  createTask(title: string, description: string ) {
    const task = {
        id: v4(),
        title,
        description,
        status: TaskStatus.PENDING
    }
    this.tasks.push(task)

    return task;
  }


  getTaskById(id: string ): Task{
    return this.tasks.find(task => task.id === id) 
  }


  updateTask(id: string, updatedFields: any) {
    const task = this.getTaskById(id)
    const newTask = Object.assign(task, updatedFields)
    this.tasks = this.tasks.map(task => task.id === id ? newTask : task)
    return newTask;
  }


  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id )
  }
}
