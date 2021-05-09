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
import { INewsService, NewsDto, NEWS_SERVICE } from 'src/core';

@Controller('app/news')
export class NewsController {
  @Inject(NEWS_SERVICE)
  private readonly newsService: INewsService;

  @Get()
  getAll(): Promise<NewsDto[]> {
    return this.newsService.getAll();
  }

  @Get(':category')
  getByCategory(@Param('category') category: string): Promise<NewsDto[]> {
    return this.newsService.getByCategory(category);
  }

  @Get(':category/:id')
  getByCategoryAndId(
    @Param('category') category: string,
    @Param('id') id: string,
  ): Promise<NewsDto> {
    return this.newsService.getByCategoryAndId(category, id);
  }

  @Post()
  async save(@Body() dto: NewsDto): Promise<string> {
    if (await this.newsService.save(dto)) {
      return 'OK';
    } else {
      throw new HttpException(
        'News was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  @Put(':id')
  async change(@Param('id') id: string, @Body() dto: NewsDto): Promise<string> {
    if (await this.newsService.put(id, dto)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Forum was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    if (await this.newsService.delete(id)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Forum was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
