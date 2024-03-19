import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from './cache/cache.module';
import * as path from 'path';
const isProd = process.env.NODE_ENV == 'production';
@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [isProd ? path.resolve('.env.prod') : path.resolve('.env')],
    }),
    TypeOrmModule.forRootAsync({
      useFactory(configService: ConfigService) {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          connectorPackage: 'mysql2', //驱动包
          port: configService.get('DB_PORT'), // 端口号
          username: configService.get('DB_USER'), // 用户名
          password: configService.get('DB_PASSWD'), // 密码
          database: configService.get('DB_DATABASE'), //数据库名
          entities: [User], //数据库对应的Entity
          synchronize: !isProd, //是否自动同步实体文件,生产环境建议关闭
        };
      },
      inject: [ConfigService],
    }),
    CacheModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
