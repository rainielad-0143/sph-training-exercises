import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';
import { User } from '../users/user.entity';
import { TaskStatus } from './enums/task-status.enum';

import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private task: Repository<Task>,
    @InjectRepository(User) private user: Repository<User>,
  ) {}

  async create(dto: CreateTaskDto) {
    const user = await this.user.findOneBy({
      id: dto.userId,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const task = this.task.create({
      title: dto.title,
      description: dto.description,
      user,
    });

    return this.task.save(task);
  }

  async findAll({
    page = 1,
    limit = 5,
    status,
  }: {
    page: number;
    limit: number;
    status: TaskStatus;
  }) {
    const [tasks, total] = await this.task.findAndCount({
      where: status ? { status } : {},
      relations: ['user'],
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data: tasks,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const task = await this.task.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  async update(id: number, dto: UpdateTaskDto) {
    await this.findOne(id);

    await this.task.update(id, dto);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.task.delete(id);

    return {
      message: 'Task deleted',
    };
  }

  findByStatus(status: TaskStatus) {
    return this.taskRepo.find({
      where: { status },
      relations: ['user'],
    });
  }
}
