import { BlogModule } from './blog';
import { CategoryModule } from './category';
import { ForumModule } from './forum';
import { NewsModule } from './news';
import { JSONParserModule, JSONParser } from './json-parser';

export const MODULES = [
  JSONParserModule,
  BlogModule,
  ForumModule,
  NewsModule,
  CategoryModule,
];
export {
  BlogModule,
  ForumModule,
  NewsModule,
  CategoryModule,
  JSONParserModule,
  JSONParser,
};
