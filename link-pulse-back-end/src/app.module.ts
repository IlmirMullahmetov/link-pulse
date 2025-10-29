import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SiteModule } from './sites/site.module';

@Module({
  imports: [ConfigModule.forRoot(),AuthModule, UserModule, SiteModule],
})
export class AppModule {}
