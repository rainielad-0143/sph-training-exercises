import { IsEnum, IsInt, IsString } from 'class-validator';

import { TaskStatus } from '../enums/task-status.enum';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsInt()
  userId: number;
}
