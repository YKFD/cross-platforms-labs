import { ICategory } from '../../category';

export interface IChildrenCategory {
  id?: string;
  name: string;
  alias: string;
  ord: number;
  categoryId?: string;
  category: ICategory;
}
