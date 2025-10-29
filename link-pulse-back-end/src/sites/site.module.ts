import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';

@Module({
  controllers: [SiteController],
  providers: [SiteService, PrismaService],
  exports:[SiteService]
})
export class SiteModule {}
