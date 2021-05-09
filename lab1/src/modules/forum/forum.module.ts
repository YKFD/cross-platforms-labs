import { Module } from '@nestjs/common';
import { FORUM_CONTROLLERS } from './controllers';
import { FROUM_SERVICE_PROVIDERS } from './providers';

@Module({
  controllers: FORUM_CONTROLLERS,
  providers: FROUM_SERVICE_PROVIDERS,
})
export class ForumModule {}
