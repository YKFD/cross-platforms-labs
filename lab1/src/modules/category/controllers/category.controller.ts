import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { CategoryDto, CATEGORY_SERVICE } from 'src/core';
import { ICategoryService } from 'src/core/interfaces/category/services';

@Controller('app/categories')
export class CategoryController {
  @Inject(CATEGORY_SERVICE)
  private readonly categoryService: ICategoryService;

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Get(':category')
  getByCategory(@Param('category') category: string) {
    return this.categoryService.getByCategory(category);
  }

  @Post()
  async save(@Body() dto: CategoryDto): Promise<string> {
    if (await this.categoryService.save(dto)) {
      return 'OK';
    } else {
      throw new HttpException(
        'Blog was not added',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
