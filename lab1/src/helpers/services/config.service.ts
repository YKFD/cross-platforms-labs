import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable, Logger } from '@nestjs/common';
import { IConfigService } from 'src/core';

@Injectable()
export class ConfigService implements IConfigService {
  private logger: Logger = new Logger('Config service');
  private readonly envConfig: Record<string, string>;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
    this.logger.log('Configs injected');
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  getOrDef(key: string, def: any): any {
    if (this.get(key)) {
      return this.get(key);
    } else {
      return def;
    }
  }

  getOrError(key: string): any {
    const res = this.get(key);
    if (!res) throw new Error('Not found reqired env key = ' + key);
    return res;
  }
}
