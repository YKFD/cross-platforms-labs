import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ForumDto, FORUM_SERVICE, IForumService } from 'src/core';

@Controller('app/forum')
export class ForumController {
  @Inject(FORUM_SERVICE)
  private readonly forumService: IForumService;

  @Get()
  getAll(): Promise<ForumDto[]> {
    return this.forumService.getAll();
  }

  @Get(':category')
  getByCategory(@Param('category') category: string): Promise<ForumDto[]> {
    return this.forumService.getByCategory(category);
  }

  @Get(':category/:id')
  getByCategoryAndId(
    @Param('category') category: string,
    @Param('id') id: string,
  ): Promise<ForumDto> {
    return this.forumService.getByCategoryAndId(category, id);
  }

  @Post()
  async save(@Body() dto: ForumDto): Promise<string> {
    if (await this.forumService.save(dto)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Forum was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  @Put(':id')
  async change(
    @Param('id') id: string,
    @Body() dto: ForumDto,
  ): Promise<string> {
    if (await this.forumService.put(id, dto)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Forum was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  @Delete(':id')
  async delet(
    @Param('id') id: string,
  ): Promise<string> {
    if (await this.forumService.delete(id)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Forum was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
