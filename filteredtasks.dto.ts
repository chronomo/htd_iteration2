import { TaskStatus } from '../taskstatus.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class FilteredTasksDto {
  @IsOptional()
  @IsIn(Object.values(TaskStatus))
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
