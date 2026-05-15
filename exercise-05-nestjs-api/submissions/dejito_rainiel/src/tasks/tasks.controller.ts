import { Body, Controller, Post } from '@nestjs/common';

import { TasksService } from './tasks.service';

import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskStatus } from './enums/task-status.enum';

@Controller('tasks')
export class TasksController {
  constructor(private tasksServices: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksServices.create(dto);
  }
}
