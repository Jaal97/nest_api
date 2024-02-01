import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaskDto} from './dto/task.dto'

//al solicitar /tasks lo procesaremos con los metodos de esta clase
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }


  @Post()
  createTask(@Body() newTask: CreateTaskDto){
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string){
    this.tasksService.deleteTask(id);
  }

}
