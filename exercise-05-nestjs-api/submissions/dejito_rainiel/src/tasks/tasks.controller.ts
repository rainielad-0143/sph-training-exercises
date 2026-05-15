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
  UseGuards,
} from '@nestjs/common';

import { TasksService } from './tasks.service';

import { TaskStatus } from './enums/task-status.enum';

import { CreateTaskDto } from './dtos/create-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private tasksServices: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksServices.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 5,
    @Query('status') status?: TaskStatus,
  ) {
    return this.tasksServices.findAll({
      page,
      limit,
      status,
    });
  }

  @Get('status/:status')
  findByStatus(@Param('status') status: TaskStatus) {
    return this.tasksServices.findByStatus(status);
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
