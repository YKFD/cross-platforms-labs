import { IChildrenCategory } from '../../children-category';

export interface ICategory {
  id?: string;
  name: string;
  type: number;
  children: IChildrenCategory[];
}
