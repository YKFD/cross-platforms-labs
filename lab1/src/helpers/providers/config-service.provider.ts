import { ValueProvider } from '@nestjs/common';
import { CONFIG_SERVICE } from 'src/core/providers';
import { ConfigService } from '../services';

export const configServiceProvider = (envPath: string): ValueProvider => ({
  provide: CONFIG_SERVICE,
  useValue: new ConfigService(envPath),
});
