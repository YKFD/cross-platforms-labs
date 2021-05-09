import { ClassProvider } from '@nestjs/common';
import { NEWS_SERVICE } from 'src/core';
import { NewsService } from '../services';

export const NewsServiceProvider: ClassProvider = {
  provide: NEWS_SERVICE,
  useClass: NewsService,
};
