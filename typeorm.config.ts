import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from '.././tasks/task.entity';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'taskman',
  entities: [Task, __dirname + '/../**/*.entity.js'],
  synchronize: true,
  dropSchema: true,
};
