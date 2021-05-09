import { INews } from '../interfaces';

export class NewsDto implements INews {
  title: string;
  body: string;
  category: string;
}
