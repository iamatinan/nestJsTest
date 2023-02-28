import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'baasu.db.elephantsql.com',
  port: 5432,
  username: 'agjhvyef',
  password: 'hUDD03pYuaFrVALVemIfVBOqVfO2W714',
  database: 'agjhvyef',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  autoLoadEntities: true,
  synchronize: true,
};
