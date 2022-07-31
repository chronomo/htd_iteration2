import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './taskstatus.enum';

@Entity('taskman')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
