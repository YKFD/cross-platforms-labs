import { CategoryDto } from 'src/core';
import { Category } from 'src/dbl';

export interface ICategoryService {
  getAll(): Promise<CategoryDto[]>;

  getByCategory(category: string): Promise<CategoryDto>;

  save(categoryDto: CategoryDto): Promise<Category>;
}
