import { ClassProvider } from '@nestjs/common';
import { FORUM_SERVICE } from 'src/core';
import { ForumService } from '../services';

export const ForumServiceProvider: ClassProvider = {
  provide: FORUM_SERVICE,
  useClass: ForumService,
};
