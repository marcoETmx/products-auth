import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Db } from 'mongodb';

import config from './config';
@Injectable()
export class AppService {
  constructor(
    @Inject('MONGO') private database: Db,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    return 'Bienvenido a API Products puedes acceder a la documentación en la siguiente liga https://github.com/marcoETmx/products-auth/blob/main/README.md';
  }
}
