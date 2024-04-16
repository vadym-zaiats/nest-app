import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        // type: 'postgres',
        // port: 5432,
        // username: configService.get('DB_USERNAME'),
        // database: configService.get('DB_DATABASE'),
        // host: configService.get('DB_HOST'),
        // password: configService.get('DB_PASSWORD'),
        autoLoadEntities: true,
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '12345678',
        database: 'homework-13',
        // logging: false,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
