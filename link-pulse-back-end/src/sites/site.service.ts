import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SiteDto } from './site.dto';

@Injectable()
export class SiteService {
  constructor(private prisma: PrismaService) {}

  async getAll(userId:string) {
    return this.prisma.site.findMany({
      where: {
        userId
      }
    })
  }
  async create(dto: SiteDto, userId: string) {
    return this.prisma.site.create({
      data: {
        ...dto,
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
