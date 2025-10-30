import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SiteDto } from './site.dto';
import { SiteStatus } from 'generated/prisma';
import axios from 'axios';

@Injectable()
export class SiteService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId: string) {
    const sites = await this.prisma.site.findMany({ where: { userId } });

    const sitesWithStatus = await Promise.all(
      sites.map(async (site) => {
        try {
          const response = await axios.get(site.url, { timeout: 3000 });
          const isOk = response.status >= 200 && response.status < 400;
          return { ...site, status: isOk ? SiteStatus.Online : SiteStatus.Offline };
        } catch {
          return { ...site, status: SiteStatus.Offline };
        }
      }),
    );

    return sitesWithStatus;
  }
  async create(dto: SiteDto, userId: string) {
    return this.prisma.site.create({
      data: {
        ...dto,
        status: dto.status ?? SiteStatus.Unknown,
        user:{
          connect: {
            id: userId
          }
        }
      }
    })
  }
  async update(dto: Partial<SiteDto>, taskId: string, userId: string) {
    return this.prisma.site.update({
      where: {
        userId,
        id: taskId
      },
      data: dto
    })
  }
  async delete(taskId: string) {
    return this.prisma.site.delete({
      where: {
        id: taskId
      }
    })
  }
}
