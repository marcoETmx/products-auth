import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, ConfigModule, ProductsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
