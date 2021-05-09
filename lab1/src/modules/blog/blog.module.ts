import { Module } from '@nestjs/common';
import { BLOG_CONTROLLERS } from './controllers';
import { BLOG_SERVICE_PROVIDERS } from './providers';

@Module({
  controllers: BLOG_CONTROLLERS,
  providers: BLOG_SERVICE_PROVIDERS,
})
export class BlogModule {}
