import { Module } from '@nestjs/common';
import { DBLModule } from './dbl';
import { ConfigModule } from './helpers/config.module';
import { MODULES } from './modules';

@Module({
  imports: [ConfigModule.forRoot({ envPath: `.env` }), DBLModule, ...MODULES],
})
export class AppModule {}
