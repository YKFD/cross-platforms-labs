import { Global, Module } from '@nestjs/common';
import { JSON_PARSER_SERVICE_PROVIDERS } from './providers';

@Global()
@Module({
  providers: JSON_PARSER_SERVICE_PROVIDERS,
  exports: JSON_PARSER_SERVICE_PROVIDERS,
})
export class JSONParserModule {}
