import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaskDto, updateTaskDto} from './dto/task.dto'

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


  @Patch(":id")
  updateTask(@Param("id") id: string, @Body() upddatedFields: updateTaskDto){
    return this.tasksService.updateTask(id, upddatedFields);

  }

}
