import { Parser } from 'src/core';

export interface IParser extends Parser {
  getObject: (name: string) => any;
}
