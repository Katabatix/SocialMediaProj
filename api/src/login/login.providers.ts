import { DataSource } from 'typeorm';
import { Login } from './entities/login.entity';

export const loginProviders = [
  {
    provide: 'LOGIN_REPOSITORY', //TODO: put these strings in constants.ts file
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Login),
    inject: ['DATA_SOURCE'],
  },
];
