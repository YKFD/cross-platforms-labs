import { IBlog } from '../interfaces';

export class BlogDto implements IBlog {
  title: string;
  body: string;
  category: string;
}
