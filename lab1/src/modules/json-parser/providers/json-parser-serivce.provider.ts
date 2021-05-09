import { ClassProvider } from '@nestjs/common';
import { JSON_PARSER } from 'src/core';
import { JSONParser } from '../services';

export const JSONParserServiceProvider: ClassProvider = {
  provide: JSON_PARSER,
  useClass: JSONParser,
};
