import { Repository } from 'typeorm';
import { Category } from 'src/dbl';

export interface ICategoryRepository extends Repository<Category> {}
