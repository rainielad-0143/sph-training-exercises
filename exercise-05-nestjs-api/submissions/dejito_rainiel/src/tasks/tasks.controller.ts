import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Get()
  findAll() {
    return this.tasksServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksServices.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Partial<CreateTaskDto>,
  ) {
    return this.tasksServices.update(id, dto);
  }

  @Delete('id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksServices.remove(id);
  }
}
