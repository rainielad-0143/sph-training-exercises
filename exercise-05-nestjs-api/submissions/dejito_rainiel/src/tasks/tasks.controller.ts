import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { TasksService } from './tasks.service';

import { TaskStatus } from './enums/task-status.enum';

import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksServices: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksServices.create(dto);
  }

  @Get()
  findAll(@Query('status') status?: TaskStatus) {
    return this.tasksServices.findAll(status);
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

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksServices.remove(id);
  }
}
