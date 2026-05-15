import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './task.entity';
import { User } from '../users/user.entity';

import { CreateTaskDto } from './dtos/create-task.dto';
import { TaskStatus } from './enums/task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateTaskDto) {
    const user = await this.userRepo.findOneBy({
      id: dto.userId,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const task = this.taskRepo.create({
      title: dto.title,
      description: dto.description,
      status: dto.status,
      user,
    });

    return this.taskRepo.save(task);
  }

  findAll() {
    return this.taskRepo.find({
      relations: ['user'],
    });
  }

  findOne(id: number) {
    return this.taskRepo.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async update(id: number, dto: Partial<CreateTaskDto>) {
    await this.taskRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.taskRepo.delete(id);

    return {
      message: 'Task deleted',
    };
  }
}
