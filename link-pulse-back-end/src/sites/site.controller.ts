import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { SiteService } from './site.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { SiteDto } from './site.dto';


@Controller('user/sites')
export class SiteController {
  constructor(private readonly siteService: SiteService) { }
  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.siteService.getAll(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: SiteDto, @CurrentUser('id') userId: string) {
    return this.siteService.create(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(
    @Body() dto: SiteDto, 
    @CurrentUser('id') userId: string, 
    @Param('id') id: string
    ){
      return this.siteService.update(dto, id, userId)
  }


  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id') id: string) {
    return this.siteService.delete(id)
  }
}
