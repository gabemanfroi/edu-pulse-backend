import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'mysql',
  host: `localhost`,
  port: `3306`,
  username: `admin`,
  password: `admin`,
  database: `edu-pulse`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/infra/db/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
