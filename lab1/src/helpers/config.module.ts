import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_SERVICE } from 'src/core';
import { IConfigParams } from './interfaces';
import { configServiceProvider } from './providers';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(params: IConfigParams): DynamicModule {
    return {
      module: ConfigModule,
      imports: [],
      providers: [configServiceProvider(params.envPath)],
      exports: [CONFIG_SERVICE],
    };
  }
}
