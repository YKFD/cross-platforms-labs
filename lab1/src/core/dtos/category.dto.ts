import { ICategory, IChildrenCategory } from '../interfaces';

export class CategoryDto implements ICategory {
  name: string;
  type: number;
  children: IChildrenCategory[];
}
