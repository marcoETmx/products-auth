import { Module } from '@nestjs/common';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { enviroments } from './enviroments';
import { UsersModule } from './users/users.module';
import config from './config';

@Module({
  imports: [
    DatabaseModule,
    ProductsModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
