import { IsEnum, IsInt, IsString, IsOptional } from 'class-validator';

import { TaskStatus } from '../enums/task-status.enum';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsInt()
  userId: number;
}
