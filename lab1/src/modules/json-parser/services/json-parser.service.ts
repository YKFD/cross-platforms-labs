import { Injectable } from '@nestjs/common';
import { Parser, IParser } from 'src/core';

@Injectable()
export class JSONParser extends Parser implements IParser {
  getObject(path: string): any {
    const data = super.getFile(path);
    return JSON.parse(data);
  }
}
