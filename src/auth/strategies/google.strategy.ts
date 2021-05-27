import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from '../../config';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(@Inject(config.KEY) configService: ConfigType<typeof config>) {
    super({
      clientID: configService.google.clienteID,
      clientSecret: configService.google.clientSecret,
      callbackURL: configService.google.callbackURL,
      passReqToCallback: true,
      scope: ['email','profile'],
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile,
    done: VerifyCallback,
  ): Promise<any> {
    const {  emails } = profile;
    const user = {
      email: emails[0].value,
      role: 'customer'
    };
    done(null, user);
  }
}
