import { ClassProvider } from '@nestjs/common';
import { CATEGORY_SERVICE } from 'src/core';
import { CategoryService } from '../services';

export const CategoryServiceProvider: ClassProvider = {
  provide: CATEGORY_SERVICE,
  useClass: CategoryService,
};
