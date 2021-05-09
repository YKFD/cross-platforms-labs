import { ClassProvider } from '@nestjs/common';
import { BLOG_SERVICE } from 'src/core';
import { BlogServise } from '../services';

export const BlogServiceProvider: ClassProvider = {
  provide: BLOG_SERVICE,
  useClass: BlogServise,
};
