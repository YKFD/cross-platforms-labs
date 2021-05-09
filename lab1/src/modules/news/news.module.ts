import { Module } from '@nestjs/common';
import { NEWS_CONTROLLERS } from './controllers';
import { NEWS_SERVICE_PROVIDERS } from './providers';

@Module({
  controllers: NEWS_CONTROLLERS,
  providers: NEWS_SERVICE_PROVIDERS,
})
export class NewsModule {}
