import { Module } from '@nestjs/common';
import { CATEGORY_CONTROLLERS } from './controllers';
import { CATEGORY_SERVICE_PROVIDERS } from './providers';

@Module({
  controllers: CATEGORY_CONTROLLERS,
  providers: CATEGORY_SERVICE_PROVIDERS,
})
export class CategoryModule {}
