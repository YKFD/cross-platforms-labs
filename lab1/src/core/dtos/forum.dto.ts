import { IForum } from '../interfaces';

export class ForumDto implements IForum {
  title: string;
  body: string;
  category: string;
}
